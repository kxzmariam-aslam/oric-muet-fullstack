import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Globe, Search, Filter, Calendar, MapPin, Users, ChevronRight, Link2 } from 'lucide-react';

const ConferencesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const conferences = [
    { id: 1, title: 'International Conference on AI & Data Science 2024', type: 'International', date: 'Dec 15-17, 2024', location: 'Islamabad, Pakistan', website: 'www.icai2024.com', speakers: 20 },
    { id: 2, title: 'National Research Symposium 2024', type: 'National', date: 'Nov 20-21, 2024', location: 'Jamshoro, Sindh', website: 'www.nrs2024.edu.pk', speakers: 15 },
    { id: 3, title: 'IEEE Big Data Conference 2024', type: 'International', date: 'Nov 15-18, 2024', location: 'Dubai, UAE', website: 'www.ieeebigdata.com', speakers: 25 },
    { id: 4, title: 'Pakistan Engineering Congress 2024', type: 'National', date: 'Oct 25-26, 2024', location: 'Lahore, Punjab', website: 'www.pec2024.pk', speakers: 12 },
    { id: 5, title: 'ICML 2024 - Machine Learning Conference', type: 'International', date: 'Dec 10-14, 2024', location: 'Vancouver, Canada', website: 'www.icml2024.org', speakers: 30 },
  ];

  const filteredConferences = conferences.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || c.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Globe size={28} className="text-oric-royal" />
            National & International Conferences
          </h1>
          <p className="text-gray-500 text-sm mt-1">Stay updated with upcoming conferences and events</p>
        </div>

        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search conferences..."
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
                <option value="International">International</option>
                <option value="National">National</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredConferences.map((conf) => (
            <div key={conf.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{conf.title}</h3>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      conf.type === 'International' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {conf.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Calendar size={14} /> {conf.date}</div>
                    <div className="flex items-center gap-1"><MapPin size={14} /> {conf.location}</div>
                    <div className="flex items-center gap-1"><Users size={14} /> {conf.speakers} Speakers</div>
                    <div className="flex items-center gap-1"><Link2 size={14} /> <a href="#" className="text-oric-royal hover:underline">{conf.website}</a></div>
                  </div>
                </div>
                <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium whitespace-nowrap">
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ConferencesPage;