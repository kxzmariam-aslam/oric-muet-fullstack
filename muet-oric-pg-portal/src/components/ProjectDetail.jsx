import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="error-page">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-primary">Back to Projects</Link>
      </div>
    );
  }

  const handleApply = () => {
    alert(`✅ Application submitted for "${project.title}"!\n\n📧 Confirmation sent to your email.\n📋 Your application ID: #APP-${project.id}${Date.now().toString().slice(-4)}`);
    navigate('/projects');
  };

  return (
    <div className="project-detail-page">
      <div className="detail-header">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        <h1>{project.title}</h1>
        <span className={`status-badge ${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>

      <div className="detail-content">
        <div className="detail-main">
          <h3>Project Description</h3>
          <p>{project.description}</p>

          <h3>Requirements</h3>
          <ul className="requirements-list">
            {project.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>

          <h3>Supervisor Information</h3>
          <div className="supervisor-info">
            <p><strong>Name:</strong> {project.supervisor}</p>
            <p><strong>Department:</strong> {project.department}</p>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="info-card">
            <h4>Project Details</h4>
            <p><strong>Status:</strong> {project.status}</p>
            <p><strong>Deadline:</strong> {project.deadline}</p>
            <p><strong>Available Positions:</strong> {project.positions}</p>
            <p><strong>Total Applicants:</strong> {project.applicants}</p>
          </div>

          <button onClick={handleApply} className="btn btn-success btn-large">
            Apply for this Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;