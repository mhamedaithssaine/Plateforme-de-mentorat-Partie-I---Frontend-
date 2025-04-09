
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Courses from './components/courses/CourseList';
import CourseDetail from './pages/CourseDetail';
import CategoryList from './pages/Categories';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/categories" element={<CategoryList />} />

          
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
