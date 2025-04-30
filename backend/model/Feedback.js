// backend/models/Feedback.js
import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Adds createdAt and updatedAt automatically

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
