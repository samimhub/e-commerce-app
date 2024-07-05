import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    item: { type: String, required: true },
})
export default mongoose.model.Cart || mongoose.model('Cart',cartSchema);