import React from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import './App.css';

function App() {
  const showCourses = true;
  const showBooks = true;
  const showBlogs = true;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to Blogger App</h1>
      <div className="container">
        {/* Logical && */}
        {showCourses && <CourseDetails />}
        
        {/* Ternary */}
        {showBooks ? <BookDetails /> : null}
        
        {/* IIFE */}
        {(() => showBlogs && <BlogDetails />)()}
      </div>
    </div>
  );
}

export default App;
