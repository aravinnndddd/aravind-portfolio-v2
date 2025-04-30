import axios from 'axios';

const API = axios.create({ baseURL: 'https://your-backend-onrender.com' });

export const submitFeedback = (feedbackData) => API.post('/feedback', feedbackData);
export const getFeedbacks = () => API.get('/all-feedbacks');
