
import React, { useState } from 'react';
import { createCourse } from '../../services/api';

const CourseForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    thumbnail: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCourse(formData);
      setFormData({ title: '', description: '', thumbnail: '' });
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
      />
      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
      />
      <input
        type="text"
        placeholder="Thumbnail URL"
        value={formData.thumbnail}
        onChange={(e) => setFormData({...formData, thumbnail: e.target.value})}
      />
      <button type="submit">Create Course</button>
    </form>
  );
};

export default CourseForm;
