import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [stats] = useState({
    activeProjects: 47,
    publications: 138,
    grants: 'PKR 84M',
    researchers: 312
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleApply = (projectId) => {
    alert(`✅ Application submitted successfully for Project #${projectId}!\nYou will receive a confirmation email shortly.`);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <span className="time">{currentTime || '09:28 PM'}</span>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Active Projects</h3>
          <div className="stat-number">{stats.activeProjects}</div>
          <span className="stat-change positive">+5 this semester</span>
        </div>
        <div className="stat-card">
          <h3>Publications (2024)</h3>
          <div className="stat-number">{stats.publications}</div>
          <span className="stat-change positive">+22 from last year</span>
        </div>
        <div className="stat-card">
          <h3>Research Grants</h3>
          <div className="stat-number">{stats.grants}</div>
          <span className="stat-change">12 active grants</span>
        </div>
        <div className="stat-card">
          <h3>Registered Researchers</h3>
          <div className="stat-number">{stats.researchers}</div>
          <span className="stat-change">Faculty and scholars</span>
        </div>
      </div>

      <div className="projects-section">
        <div className="section-header">
          <h2>Research Projects</h2>
          <p>Explore research opportunities and assistantship positions</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="status-badge open">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <span><strong>Supervisor:</strong> {project.supervisor}</span>
                <span><strong>Department:</strong> {project.department}</span>
                <span><strong>Deadline:</strong> {project.deadline}</span>
              </div>
              <div className="project-actions">
                <Link to={`/project/${project.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button 
                  onClick={() => handleApply(project.id)} 
                  className="btn btn-success"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all">
          <Link to="/projects" className="btn btn-outline">View All →</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;