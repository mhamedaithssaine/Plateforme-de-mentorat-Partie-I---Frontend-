import React, { useState, useEffect } from 'react';
import { getCourses } from '../../services/api';
import CourseCard from './CourseCard';
import Loader from '../common/Loader';
import ErrorMessage from '../common/ErrorMessage';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCourses();
        setCourses(response.data.data.data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
    <div className="course-list">
        <CourseCard course={courses} />
    </div>
    </div>

    
  );
};





export default CourseList;