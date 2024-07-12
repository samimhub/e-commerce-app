import { dbConnect } from "@/app/lib/dbConnect";
import Product from "@/app/model/Product";
import { NextResponse } from "next/server";

const addProduct = async (request:Request) => {
    await dbConnect();
    try{
    const body =await request.json();
    const {
        title,
        description,
        category,
        style,
        size,
        inventory,
        color,
        price,
        images,
        userId,
        store
    }=body;

  
    const newProduct = await Product.create({
      title,
      description,
      category,
      style,
      size,
      inventory,
      color,
      price,
      images,
      userId,
      store
    })
    }
    catch(error){
        console.log('Error creating the product', error)
        return NextResponse.error()
    }
}

export {
    addProduct as POST
}