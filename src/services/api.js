
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
});

export const getCourses = () => api.get('/courses');

export const getCourse = (id) => api.get(`/courses/${id}`);
export const createCourse = (data) => api.post('/courses', data);
export const updateCourse = (id, data) => api.put(`/courses/${id}`, data);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);

export const getCategories = () => api.get('/categories');
export const getTags = () => api.get('/tags');
export const getVideos = () => api.get('/videos');

export default api;