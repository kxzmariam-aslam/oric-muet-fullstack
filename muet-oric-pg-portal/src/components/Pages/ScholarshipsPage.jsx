import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Award, Search, Filter, Calendar, Users, DollarSign, CheckCircle, ChevronRight } from 'lucide-react';

const ScholarshipsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const scholarships = [
    { id: 1, title: 'HEC PhD Scholarship Program', amount: '₨1.5M/year', deadline: '2024-12-15', provider: 'HEC', status: 'Available', eligibility: 'PhD Students' },
    { id: 2, title: 'USAID Merit Scholarship', amount: 'Full Tuition + Stipend', deadline: '2024-11-30', provider: 'USAID', status: 'Applied', eligibility: 'Bachelor\'s Students' },
    { id: 3, title: 'British Council Research Fellowship', amount: '$10,000', deadline: '2024-12-01', provider: 'British Council', status: 'Available', eligibility: 'PhD Students' },
    { id: 4, title: 'HEC MS Scholarship', amount: '₨1.2M/year', deadline: '2024-10-15', provider: 'HEC', status: 'Approved', eligibility: 'MS Students' },
    { id: 5, title: 'ORIC Research Grant', amount: '₨500,000', deadline: '2024-11-20', provider: 'ORIC MUET', status: 'Available', eligibility: 'All Students' },
  ];

  const filteredScholarships = scholarships.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || s.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    if (status === 'Available') return 'bg-blue-100 text-blue-700';
    if (status === 'Applied') return 'bg-yellow-100 text-yellow-700';
    if (status === 'Approved') return 'bg-green-100 text-green-700';
    return 'bg-gray-100 text-gray-700';
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Award size={28} className="text-oric-gold" />
            Scholarships
          </h1>
          <p className="text-gray-500 text-sm mt-1">Explore scholarships and funding opportunities</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search scholarships..."
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
                <option value="Available">Available</option>
                <option value="Applied">Applied</option>
                <option value="Approved">Approved</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scholarships List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredScholarships.map((scholarship) => (
            <div key={scholarship.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{scholarship.title}</h3>
                    {/* Status Badge */}
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${getStatusColor(scholarship.status)}`}>
                      {scholarship.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} className="text-oric-gold" /> {scholarship.amount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> Deadline: {scholarship.deadline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {scholarship.eligibility}
                    </div>
                    <div className="flex items-center gap-1 col-span-full">
                      <Award size={14} /> Provider: {scholarship.provider}
                    </div>
                  </div>
                </div>
                {/* ✅ Apply Button = BLUE (Only for Available) */}
                {scholarship.status === 'Available' && (
                  <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium whitespace-nowrap">
                    Apply Now →
                  </button>
                )}
                {scholarship.status === 'Applied' && (
                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-oric-sm text-sm font-medium whitespace-nowrap">
                    Applied
                  </span>
                )}
                {scholarship.status === 'Approved' && (
                  <span className="bg-green-100 text-green-700 px-4 py-2 rounded-oric-sm text-sm font-medium whitespace-nowrap">
                    ✅ Approved
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ScholarshipsPage;