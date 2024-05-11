import User from '../../model/User'
import bcrypt from "bcrypt"
import {dbConnect} from '../../lib/dbConnect'
import { NextResponse } from "next/server"

export async function POST(request: Request){
    await dbConnect();

    const body = await request.json()
    const {
        name,
        email,
        password
    } = body;

    const hashedPassword = await bcrypt.hash(password,12)

    try{
        const user = await User.create({
            data:{
                name,
                email,
                password:hashedPassword
            }
        })
        return NextResponse.json(user)
    }catch{
        return NextResponse.error()
    }
}