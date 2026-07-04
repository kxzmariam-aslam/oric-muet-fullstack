import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const ApplyProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
    experience: '',
    motivation: '',
    resume: null
  });

  const [submitted, setSubmitted] = useState(false);

  if (!project) {
    return <div className="error-page"><h2>Project not found</h2></div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    alert(`✅ Application Submitted Successfully!\n\n📝 Project: ${project.title}\n👤 Applicant: ${formData.name}\n📧 Email: ${formData.email}\n📄 Application ID: #APP-${id}-${Date.now().toString().slice(-6)}\n\n📨 A confirmation email has been sent to ${formData.email}\n⏳ Application status: Under Review\n\nThank you for your interest!`);
    
    setTimeout(() => {
      navigate('/projects');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <h2>✅ Application Submitted!</h2>
        <p>You will receive a confirmation email shortly.</p>
        <button onClick={() => navigate('/projects')} className="btn btn-primary">
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="apply-page">
      <div className="apply-header">
        <h1>Apply for: {project.title}</h1>
        <p>Supervisor: {project.supervisor}</p>
      </div>

      <form onSubmit={handleSubmit} className="apply-form">
        <div className="form-group">
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Department *</label>
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            placeholder="Your current department"
          />
        </div>

        <div className="form-group">
          <label>Experience / Skills</label>
          <textarea
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows="3"
            placeholder="List your relevant experience and skills"
          />
        </div>

        <div className="form-group">
          <label>Motivation Statement *</label>
          <textarea
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Why are you interested in this project?"
          />
        </div>

        <div className="form-group">
          <label>Upload CV/Resume *</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            required
            accept=".pdf,.doc,.docx"
          />
        </div>

        <button type="submit" className="btn btn-success btn-large">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplyProject;