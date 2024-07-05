import mongoose from 'mongoose'

const purchasedSchema = new mongoose.Schema({
    item: { type: String, required: true },
})

export default mongoose.model.Purchased || mongoose.model('Purchased',purchasedSchema)