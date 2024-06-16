import type { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { dbConnect } from "@/app/lib/dbConnect";
import User from "@/app/model/User";



export const options:NextAuthOptions = {
    providers:[
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{
                    label:'email',
                    type:'text',
                    placeholder:'your email'
                },
                password:{
                    label:'password',
                    type:'password',
                    placeholder:'your password'
                }
            },
            async authorize(credentials){
                
                if(!credentials?.email || !credentials?.password){
                    console.error('missing cradential.....')
                    throw new Error('Invalid credentials')
                }
                await dbConnect();
                const user = await User.findOne({
                    where:{
                        email:credentials.email
                    }
                })

                if(!user){
                    console.error('User not found or password missing');
                    throw new Error('Invalid credentials')
                }
                const isCorrectedPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if(!isCorrectedPassword){
                    throw new Error('Invalid credentials')
                }
                
                console.log("Authorization successful for user:", user.email);
                return user;
            }
        })
    ],
  
    callbacks:{
        session: async ({session, token, user}) => {
            if(session?.user){
                session.user.id = token.uid;
            }
            return session
        },
        jwt: async ({user, token}) => {
            if(user){
                token.uid = user.id
            }
            return token
        }
    },
    session:{
        strategy:'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug:process.env.NODE_ENV === 'production'
}