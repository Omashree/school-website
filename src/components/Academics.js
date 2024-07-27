import React from 'react';

const Academics = () => (
  <div className="container mt-5">
    <h2>Academics</h2>
    <h3>Curriculum</h3>
    <ul>
      <li>Primary (Grades 1-5): English, Mathematics, Science, Social Studies, Art, Physical Education</li>
      <li>Secondary (Grades 6-10): English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</li>
      <li>Senior Secondary (Grades 11-12):
        <ul>
          <li>Science Stream: Physics, Chemistry, Biology, Mathematics, Computer Science, English</li>
          <li>Commerce Stream: Accountancy, Business Studies, Economics, Mathematics, English</li>
        </ul>
      </li>
    </ul>
    <h3>Teaching Methodologies</h3>
    <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
    <h3>Educational Resources</h3>
    <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>
  </div>
);

export default Academics;
