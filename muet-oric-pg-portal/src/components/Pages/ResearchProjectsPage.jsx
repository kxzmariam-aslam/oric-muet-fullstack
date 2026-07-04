import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Search, Filter, Briefcase, Calendar, Users, ChevronRight } from 'lucide-react';

const ResearchProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const projects = [
    { id: 1, title: 'AI for Healthcare Systems', supervisor: 'Dr. Ali Khan', department: 'Computer Science', status: 'Open', type: 'Research Assistantship', deadline: '2024-12-15' },
    { id: 2, title: 'Machine Learning in NLP', supervisor: 'Dr. Sana Ahmed', department: 'Computer Science', status: 'Open', type: 'Research Project', deadline: '2024-11-30' },
    { id: 3, title: 'Renewable Energy Optimization', supervisor: 'Dr. Usman Malik', department: 'Electrical Engineering', status: 'Closed', type: 'Research Project', deadline: '2024-10-01' },
    { id: 4, title: 'Blockchain for Supply Chain', supervisor: 'Dr. Fatima Noor', department: 'Computer Science', status: 'Open', type: 'Research Assistantship', deadline: '2024-12-20' },
    { id: 5, title: 'IoT in Agriculture', supervisor: 'Dr. Ahmed Raza', department: 'Electronics', status: 'Open', type: 'Research Project', deadline: '2024-12-20' },
  ];

  const filteredProjects = projects.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.supervisor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || p.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Briefcase size={28} className="text-oric-royal" />
            Research Projects & Assistantship
          </h1>
          <p className="text-gray-500 text-sm mt-1">Explore research opportunities and assistantship positions</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
              >
                <option value="all">All Status</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Projects List - All Buttons Blue */}
        <div className="grid grid-cols-1 gap-4">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{project.title}</h3>
                    {/* Status Badge - Open = Blue, Closed = Gray */}
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      project.status === 'Open' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                    {/* Type Badge - Blue */}
                    <span className="text-xs bg-oric-royal/10 text-oric-royal px-2.5 py-1 rounded-full font-medium">
                      {project.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users size={14} /> Supervisor: {project.supervisor}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} /> {project.department}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> Deadline: {project.deadline}
                    </div>
                  </div>
                </div>
               {/* Apply Button - Blue */}
<button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium">
  Apply Now →
</button>     
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ResearchProjectsPage;