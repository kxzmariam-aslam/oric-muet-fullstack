import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData.js';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [appliedProjects, setAppliedProjects] = useState([]);

  const departments = ['All', ...new Set(projectsData.map(p => p.department))];

  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.supervisor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || project.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleApply = (projectId) => {
    if (!appliedProjects.includes(projectId)) {
      setAppliedProjects([...appliedProjects, projectId]);
      alert(`✅ Successfully applied for Project #${projectId}!\n\n📧 A confirmation email has been sent to your registered email address.\n📋 Your application is being reviewed.`);
    } else {
      alert(`⚠️ You have already applied for this project.`);
    }
  };

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>All Research Projects</h1>
        <p>Browse and apply for research opportunities</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search projects or supervisors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          value={filterDepartment} 
          onChange={(e) => setFilterDepartment(e.target.value)}
          className="filter-select"
        >
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className="projects-list">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="project-item">
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-details">
                  <span>👨‍🏫 {project.supervisor}</span>
                  <span>🏛️ {project.department}</span>
                  <span>📅 {project.deadline}</span>
                  <span>📊 {project.positions} positions</span>
                  <span>👥 {project.applicants} applicants</span>
                </div>
              </div>
              <div className="project-actions">
                <Link to={`/project/${project.id}`} className="btn btn-primary">
                  View Details
                </Link>
                <button 
                  onClick={() => handleApply(project.id)}
                  className={`btn ${appliedProjects.includes(project.id) ? 'btn-secondary' : 'btn-success'}`}
                  disabled={appliedProjects.includes(project.id)}
                >
                  {appliedProjects.includes(project.id) ? '✓ Applied' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No projects found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;