import mongoose from "mongoose";


const productSchema= new mongoose.Schema({
    title:{type:String,require:true},
    description:String,
    category:String,
    style:String,
    store:String,
    size:String,
    inventory:Number,
    color:String,
    price:Number,
    images:String,
    userId:Number,
    User: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    Cart: [{ type: Schema.Types.ObjectId, ref: 'Cart' }],
    Review: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
    Purchased: [{ type: Schema.Types.ObjectId, ref: 'Purchased' }],
    
})

export default mongoose.models.Product || mongoose.model("Product", productSchema)
