import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Rocket, Search, Filter, Calendar, Users, DollarSign, Award, ChevronRight, Briefcase } from 'lucide-react';

const StartupFundingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const startups = [
    { id: 1, title: 'AI-Powered HealthTech Solution', founder: 'Ali Raza', team: 4, funding: '₨500,000', status: 'Open', deadline: '2024-12-15' },
    { id: 2, title: 'Renewable Energy Startup', founder: 'Sara Ahmed', team: 3, funding: '₨1,000,000', status: 'Open', deadline: '2024-11-30' },
    { id: 3, title: 'EdTech Platform for Pakistan', founder: 'Ahmed Malik', team: 5, funding: '₨750,000', status: 'Open', deadline: '2024-10-01' },
    { id: 4, title: 'AgriTech Innovation', founder: 'Fatima Noor', team: 2, funding: '₨300,000', status: 'Open', deadline: '2024-12-20' },
  ];

  const filteredStartups = startups.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.founder.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || s.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Rocket size={28} className="text-oric-royal" />
            Startup Seed Funding Applications
          </h1>
          <p className="text-gray-500 text-sm mt-1">Apply for seed funding to launch your startup</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search startups..."
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

        {/* Startups List - All Buttons Blue */}
        <div className="grid grid-cols-1 gap-4">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{startup.title}</h3>
                    {/* Status Badge - Open = Blue */}
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      startup.status === 'Open' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {startup.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users size={14} /> Founder: {startup.founder}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} /> Team: {startup.team} members
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} className="text-oric-gold" /> {startup.funding}
                    </div>
                    <div className="flex items-center gap-1 col-span-full">
                      <Calendar size={14} /> Deadline: {startup.deadline}
                    </div>
                  </div>
                </div>
                {/* ✅ Apply Button = BLUE */}
                {startup.status === 'Open' && (
                  <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium whitespace-nowrap">
                    Apply Now →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default StartupFundingPage;
