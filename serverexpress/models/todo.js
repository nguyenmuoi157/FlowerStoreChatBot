import mongoose, { Schema } from 'mongoose';
import timestamps from 'mongoose-timestamp';

mongoose.Promise = global.Promise;

const TodoSchema = new Schema({
  text: {
        type: String,
        required: true
  },
  idComplete: {
        type: Boolean,
        default: false
  }
});

TodoSchema.plugin(timestamps);

const Todo = mongoose.model('Todo', TodoSchema, 'todos');
export default Todo;