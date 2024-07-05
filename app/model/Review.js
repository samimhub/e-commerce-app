import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    comment: { type: String, required: true },
})

export default mongoose.model.Review || mongoose.model('Review',reviewSchema);