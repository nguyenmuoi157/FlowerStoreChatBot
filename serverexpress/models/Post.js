import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const Schema = mongoose.Schema;

var Post = new Schema({
    title: { type: 'String', required: true, index: true },
    description: { type: 'String', required: true },
    content: { type: 'String', required: true },
    creationDate: { type: 'Date', required: true }
})

export default mongoose.model("Post", Post);