import { dbConnect } from '@/app/lib/dbConnect'
import User from '@/app/model/User';

import bcrypt from "bcrypt"

import { NextResponse } from "next/server"

const registerHandler=async(request:Request)=>{

    await dbConnect();

    const body = await request.json()
    const {
        name,
        email,
        password
    } = body;

    
    if(!name || !email || !password){
        return NextResponse.json({massage:'Fields are required'})
    }
    const user =await User.findOne({name})
    if(user){
        return NextResponse.json({massage:'User already exist'})
    }

    const hashedPassword = await bcrypt.hash(password,12)

    try{
        const newUser = await User.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
        return NextResponse.json({
            massage:'Register Successfully',
            user:newUser
        })
    }catch(error){
        return NextResponse.json({massage:'Internal Error'})
    }
}
export {
    registerHandler as POST
}