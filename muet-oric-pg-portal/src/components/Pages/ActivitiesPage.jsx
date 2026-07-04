import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Calendar, Search, Filter, MapPin, Users, Trophy, Music, Coffee, ChevronRight } from 'lucide-react';

const ActivitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const activities = [
    { id: 1, title: 'MUET Research Expo 2024', type: 'Exhibition', date: 'Nov 5-6, 2024', location: 'MUET Main Campus', participants: 200 },
    { id: 2, title: 'Innovation Hackathon 2024', type: 'Competition', date: 'Oct 20-22, 2024', location: 'ORIC Hall', participants: 50 },
    { id: 3, title: 'Cultural Day 2024', type: 'Event', date: 'Nov 15, 2024', location: 'MUET Ground', participants: 500 },
    { id: 4, title: 'Research Workshop: Data Science', type: 'Workshop', date: 'Oct 25, 2024', location: 'CS Department', participants: 30 },
    { id: 5, title: 'Sports Gala 2024', type: 'Sports', date: 'Dec 1-3, 2024', location: 'MUET Sports Complex', participants: 300 },
  ];

  const filteredActivities = activities.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          a.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || a.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <Calendar size={28} className="text-oric-royal" />
            Extra-Curricular Activities
          </h1>
          <p className="text-gray-500 text-sm mt-1">Explore events, competitions, and activities at MUET</p>
        </div>

        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search activities..."
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
                <option value="Exhibition">Exhibition</option>
                <option value="Competition">Competition</option>
                <option value="Event">Event</option>
                <option value="Workshop">Workshop</option>
                <option value="Sports">Sports</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredActivities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-oric-dark-gray">{activity.title}</h3>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">
                      {activity.type}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm text-gray-500">
                    <div className="flex items-center gap-1"><Calendar size={14} /> {activity.date}</div>
                    <div className="flex items-center gap-1"><MapPin size={14} /> {activity.location}</div>
                    <div className="flex items-center gap-1"><Users size={14} /> {activity.participants} Participants</div>
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

export default ActivitiesPage;