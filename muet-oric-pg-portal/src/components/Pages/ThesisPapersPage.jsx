import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { FileText, Search, Filter, Calendar, User, BookOpen, Download, Eye } from 'lucide-react';

const ThesisPapersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const papers = [
    { id: 1, title: 'Deep Learning for Medical Image Analysis', author: 'Ali Raza', type: 'MS Thesis', year: '2024', supervisor: 'Dr. Sana Khan' },
    { id: 2, title: 'AI for Renewable Energy Systems', author: 'Sara Ahmed', type: 'PhD Thesis', year: '2024', supervisor: 'Prof. Dr. Muhammad Ali' },
    { id: 3, title: 'Machine Learning in Healthcare: A Review', author: 'Dr. Usman Malik', type: 'Journal Paper', year: '2023', journal: 'IEEE Transactions' },
    { id: 4, title: 'NLP for Urdu Language', author: 'Fatima Noor', type: 'MS Thesis', year: '2023', supervisor: 'Dr. Sana Khan' },
    { id: 5, title: 'Blockchain Applications in Supply Chain', author: 'Ahmed Raza', type: 'Conference Paper', year: '2024', conference: 'IEEE Blockchain 2024' },
  ];

  const filteredPapers = papers.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || p.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <FileText size={28} className="text-oric-royal" />
            Thesis & Research Paper Listing
          </h1>
          <p className="text-gray-500 text-sm mt-1">Access theses, dissertations, and research papers</p>
        </div>

        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search papers..."
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
                <option value="phD Thesis">phD Thesis</option>
                <option value="Journal Paper">Journal Paper</option>
                <option value="Conference Paper">Conference Paper</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{paper.title}</h3>
                    <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">
                      {paper.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><User size={14} /> {paper.author}</div>
                    <div className="flex items-center gap-1"><Calendar size={14} /> {paper.year}</div>
                    {paper.supervisor && <div className="flex items-center gap-1"><BookOpen size={14} /> Supervisor: {paper.supervisor}</div>}
                    {paper.journal && <div className="flex items-center gap-1"><BookOpen size={14} /> Journal: {paper.journal}</div>}
                    {paper.conference && <div className="flex items-center gap-1"><BookOpen size={14} /> Conference: {paper.conference}</div>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-oric-royal hover:text-oric-navy p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <Eye size={18} />
                  </button>
                  <button className="text-oric-royal hover:text-oric-navy p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <Download size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ThesisPapersPage;