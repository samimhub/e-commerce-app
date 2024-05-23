import { dbConnect } from "@/app/lib/dbConnect"
import User from "@/app/model/User";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

const signup = async(request:Request)=>{
    await dbConnect();

    const body=await request.json();
    const{
        name,email,password
    }=body;

    if(!name || !email || !password){
        return NextResponse.json({message:'Fields are require'},{status:200})
    }

    const user = await User.findOne({email})
    if(user){
        return NextResponse.json({message:'User already exist'},{status:201})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    try{
        const newUser = await User.create({
            name,email,password:hashedPassword,
        })

        return NextResponse.json({
            message:'User Registration successful',
            user:newUser
        })
    }catch(error){
        console.error(error);
        return NextResponse.json({message:'Internal Server Error'},{status:400})
    }
}
export{
    signup as POST,
}