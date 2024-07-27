import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAdmissionData } from '../redux/actions';

const Admissions = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAdmissionData(formData));
    alert('Form submitted successfully');
  };

  return (
    <div className="container mt-5">
      <h2>Admissions</h2>
      <p>Welcome to the admissions page. </p>
      <h3>Admission Process</h3>
      <p>Admission forms are available for download. Submit the completed form along with required documents at the school office. Please find below the link to download our admission form:</p>
      <p><a href="admissionform.pdf" download="admissionform.pdf">
        Download Admission Form
      </a></p>
      <h3>Criteria</h3>
      <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
      <h3>Important Dates</h3>
      <ul>
        <li>Admission Form Availability: March 1st</li>
        <li>Last Date for Submission: March 31st</li>
        <li>Entrance Test: April 15th</li>
        <li>Announcement of Results: April 30th</li>
      </ul>
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Admissions;
