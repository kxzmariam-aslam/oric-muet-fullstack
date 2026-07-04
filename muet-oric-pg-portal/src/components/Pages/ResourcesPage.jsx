import React, { useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { FolderOpen, Search, Filter, Download, FileText, FileCheck, BookOpen, ChevronRight, File } from 'lucide-react';

const ResourcesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const resources = [
    { id: 1, title: 'MS Thesis Template', type: 'Template', category: 'Thesis', size: '245 KB', downloads: 120 },
    { id: 2, title: 'PhD Thesis Format Guidelines', type: 'Guide', category: 'Thesis', size: '1.2 MB', downloads: 85 },
    { id: 3, title: 'Research Proposal Template', type: 'Template', category: 'Proposal', size: '156 KB', downloads: 200 },
    { id: 4, title: 'Academic Writing Handbook', type: 'Guide', category: 'Writing', size: '3.5 MB', downloads: 150 },
    { id: 5, title: 'Research Ethics Guidelines', type: 'Guide', category: 'Ethics', size: '890 KB', downloads: 95 },
    { id: 6, title: 'Grant Application Form', type: 'Form', category: 'Grants', size: '78 KB', downloads: 180 },
    { id: 7, title: 'Research Paper Template', type: 'Template', category: 'Publication', size: '234 KB', downloads: 110 },
  ];

  const filteredResources = resources.filter(r => {
    const matchesSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          r.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || r.type === filterType;
    return matchesSearch && matchesType;
  });

  const getTypeIcon = (type) => {
    if (type === 'Template') return <FileCheck size={16} className="text-blue-600" />;
    if (type === 'Guide') return <BookOpen size={16} className="text-green-600" />;
    if (type === 'Form') return <FileText size={16} className="text-orange-600" />;
    return <File size={16} className="text-gray-600" />;
  };

  return (
    <MainLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
            <FolderOpen size={28} className="text-oric-royal" />
            Resources & Downloads
          </h1>
          <p className="text-gray-500 text-sm mt-1">Access templates, guides, and forms for research</p>
        </div>

        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search resources..."
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
                <option value="Template">Templates</option>
                <option value="Guide">Guides</option>
                <option value="Form">Forms</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => (
            <div key={resource.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-oric-light-blue rounded-lg">
                  {getTypeIcon(resource.type)}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-oric-dark-gray text-sm">{resource.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{resource.type}</span>
                    <span className="bg-gray-100 px-2 py-0.5 rounded-full">{resource.category}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                    <span>{resource.size}</span>
                    <span>•</span>
                    <span>{resource.downloads} downloads</span>
                  </div>
                </div>
              </div>
              <button className="mt-3 w-full flex items-center justify-center gap-1 bg-oric-royal text-white px-3 py-1.5 rounded-oric-sm hover:bg-oric-blue transition text-sm">
                <Download size={14} /> Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ResourcesPage;