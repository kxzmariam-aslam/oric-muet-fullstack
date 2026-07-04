import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { DollarSign, Search, Filter, Calendar, Users, Award, ChevronRight, Globe, Briefcase } from 'lucide-react';

const GrantsFundingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const grants = [
    { id: 1, title: 'NRPU Research Grant - Tier 2', type: 'Research Grant', amount: '₨500,000', deadline: '2024-12-10', provider: 'HEC', eligibility: 'Faculty, PhD Students' },
    { id: 2, title: 'HEC Travel Grant', type: 'Travel Grant', amount: '₨200,000', deadline: '2024-11-30', provider: 'HEC', eligibility: 'All Students' },
    { id: 3, title: 'International Research Collaboration Grant', type: 'Research Grant', amount: '$10,000', deadline: '2024-12-01', provider: 'British Council', eligibility: 'Faculty' },
    { id: 4, title: 'Conference Travel Support', type: 'Travel Grant', amount: '₨150,000', deadline: '2024-10-15', provider: 'ORIC MUET', eligibility: 'PhD Students' },
    { id: 5, title: 'Startup Seed Funding Program', type: 'Research Grant', amount: '₨1,000,000', deadline: '2024-11-20', provider: 'ORIC MUET', eligibility: 'All Students' },
  ];

  const filteredGrants = grants.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          g.provider.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || g.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <DollarSign size={28} className="text-oric-gold" />
            Research & Travel Grants
          </h1>
          <p className="text-gray-500 text-sm mt-1">Explore funding opportunities for research and travel</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search grants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={18} className="text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="px-3 py-2.5 border border-gray-300 rounded-oric-sm focus:ring-2 focus:ring-oric-royal outline-none text-sm"
              >
                <option value="all">All Types</option>
                <option value="Research Grant">Research Grant</option>
                <option value="Travel Grant">Travel Grant</option>
              </select>
            </div>
          </div>
        </div>

        {/* Grants List - All Buttons Blue */}
        <div className="grid grid-cols-1 gap-4">
          {filteredGrants.map((grant) => (
            <div key={grant.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{grant.title}</h3>
                    {/* Type Badge - Blue */}
                    <span className="text-xs bg-oric-royal/10 text-oric-royal px-2.5 py-1 rounded-full font-medium">
                      {grant.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} className="text-oric-gold" /> {grant.amount}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} /> Deadline: {grant.deadline}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} /> {grant.eligibility}
                    </div>
                    <div className="flex items-center gap-1 col-span-full">
                      <Briefcase size={14} /> Provider: {grant.provider}
                    </div>
                  </div>
                </div>
                {/* ✅ Apply Button = BLUE */}
                <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium whitespace-nowrap">
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

export default GrantsFundingPage;