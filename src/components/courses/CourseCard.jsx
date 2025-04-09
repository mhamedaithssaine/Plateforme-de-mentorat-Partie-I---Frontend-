import React from "react";

const CourseCard = ({ course }) => {
  return (
    <>
     
        {" "}
        {course.map((course) => (
          <div className="course-card">
            <div className="course-header">
              <img
                src={course.cover}
                alt={course.title}
                className="course-cover"
              />
              <span className={`course-level ${course.level}`}>
                {course.level === "beginner"
                  ? "Débutant"
                  : course.level === "intermediate"
                  ? "Intermédiaire"
                   : course.level === "advanced"
                   ?
                    "Avancé"
                  :"Pas Level"}
              </span>
            </div>

            <div className="course-body">
              <h1 className="course-title">{course.title}</h1>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="duration">
                  {parseFloat(course.duration)} heures
                </span>
                <span className="category">{course.category}</span>
              </div>
            </div>

            <div className="course-tags">
              {course.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
   
    </>
  );
};

export default CourseCard;
