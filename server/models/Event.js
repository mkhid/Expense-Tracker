import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  category: String,
  amount: Number,

},{timestamps:true});

export default mongoose.model('Event', eventSchema);
