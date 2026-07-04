import { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import { 
  Target, FileText, DollarSign, Users, 
  Clock, Briefcase, Calendar, Award, 
  ChevronRight, ArrowRight, ExternalLink,
  TrendingUp, BookOpen, Globe, Rocket
} from 'lucide-react';
import { getProjects, getGrants, getConferences, getScholarships } from '../../services/api';

// ✅ Static data fallback (if backend fails)
import { 
  researchProjects, 
  thesisData, 
  publications, 
  grantsData, 
  conferencesData,
  startupsData,
  activitiesData,
  scholarshipsData,
  resourcesData,
  announcementsData,
  researchAreas,
  researchGroups,
  statsData,
  assistantshipsData
} from '../../data/msData';

const MSDashboardPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [loading, setLoading] = useState(true);
  
  // ✅ State for backend data
  const [projects, setProjects] = useState([]);
  const [grants, setGrants] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [stats, setStats] = useState({
    activeProjects: 0,
    publications: 138,
    grantsTotal: 'PKR 0',
    researchers: 312
  });

  // ✅ Load data from backend
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    
    try {
      // ✅ Fetch projects from backend
      const projectsRes = await getProjects();
      if (projectsRes.success) {
        setProjects(projectsRes.projects);
        setStats(prev => ({
          ...prev,
          activeProjects: projectsRes.projects.filter(p => p.status === 'Open').length
        }));
      } else {
        // ✅ Fallback to static data
        setProjects(researchProjects);
        setStats(prev => ({
          ...prev,
          activeProjects: researchProjects.filter(p => p.status === 'Open').length
        }));
      }

      // ✅ Fetch grants from backend
      const grantsRes = await getGrants();
      if (grantsRes.success) {
        setGrants(grantsRes.grants);
        // Calculate total grants
        let total = 0;
        grantsRes.grants.forEach(g => {
          const num = g.amount.replace(/[^0-9]/g, '');
          if (num) total += parseInt(num);
        });
        setStats(prev => ({
          ...prev,
          grantsTotal: `PKR ${(total/1000000).toFixed(1)}M`
        }));
      } else {
        setGrants(grantsData);
        setStats(prev => ({
          ...prev,
          grantsTotal: 'PKR 84M'
        }));
      }

      // ✅ Fetch conferences from backend
      const confRes = await getConferences();
      if (confRes.success) {
        setConferences(confRes.conferences);
      } else {
        setConferences(conferencesData);
      }

      // ✅ Fetch scholarships from backend
      const schRes = await getScholarships();
      if (schRes.success) {
        setScholarships(schRes.scholarships);
      } else {
        setScholarships(scholarshipsData);
      }

    } catch (error) {
      console.error('Error loading data:', error);
      // ✅ Fallback to static data
      setProjects(researchProjects);
      setGrants(grantsData);
      setConferences(conferencesData);
      setScholarships(scholarshipsData);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 17) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const thesis = thesisData;
  const pubs = publications;
  const startups = startupsData;
  const activities = activitiesData;
  const resources = resourcesData;
  const announcements = announcementsData;
  const researchAreasList = researchAreas;
  const researchGroupsList = researchGroups;
  const statsDataStatic = statsData;

  // ✅ Stats Display (Dynamic from backend)
  const statsDisplay = [
    { label: 'Active Projects', value: stats.activeProjects || 47, change: '+5 this semester', icon: Target, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Publications (2024)', value: stats.publications || 138, change: '+22 from last year', icon: FileText, color: 'text-pink-600', bg: 'bg-pink-50' },
    { label: 'Research Grants', value: stats.grantsTotal || 'PKR 84M', change: '12 active grants', icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Registered Researchers', value: stats.researchers || 312, change: 'Faculty and scholars', icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-oric-royal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading dashboard...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-oric-navy via-oric-blue to-oric-royal rounded-2xl p-6 text-white shadow-xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold">{greeting}, {user?.name || 'User'}!</h1>
              <p className="text-oric-light-blue text-sm mt-1">Welcome to ORIC MUET Postgraduate Portal</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs">🎓 {user?.roleName || "Master's Student"}</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs flex items-center gap-1">
                  <Clock size={12} /> {currentTime}
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm transition">
                📢 Notifications
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards - Responsive Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {statsDisplay.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-oric border border-gray-100 p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                  <p className="text-xl font-bold text-oric-navy mt-1">{stat.value}</p>
                  <p className="text-[10px] text-green-600 mt-0.5">{stat.change}</p>
                </div>
                <div className={`${stat.bg} p-2 rounded-xl`}>
                  <stat.icon className={`${stat.color}`} size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Projects - Responsive Cards (Dynamic from Backend) */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-bold text-oric-navy flex items-center gap-2">
                <Briefcase size={22} className="text-oric-royal" />
                Research Projects ({projects.length})
              </h2>
              <p className="text-sm text-gray-500">Explore research opportunities and assistantship positions</p>
            </div>
            <button className="text-oric-royal text-sm font-medium flex items-center gap-1 hover:underline">
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-oric border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-oric-dark-gray text-sm group-hover:text-oric-royal transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          project.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                          {project.status}
                        </span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                          {project.type || 'Research'}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">{project.description || 'Research project'}</p>
                      <div className="flex flex-wrap gap-2 mt-2 text-[10px] text-gray-400">
                        <span>👨‍🏫 {project.supervisor}</span>
                        <span>📅 {project.deadline}</span>
                      </div>
                    </div>
                  </div>
                  {project.status === 'Open' && (
                    <button className="mt-3 w-full bg-oric-royal text-white text-xs py-1.5 rounded-lg hover:bg-oric-blue transition">
                      Apply Now →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* MS Thesis */}
          <div className="bg-white rounded-xl shadow-oric border border-gray-100 p-4">
            <h3 className="font-bold text-oric-navy flex items-center gap-2 text-sm">
              📄 MS Thesis
            </h3>
            <p className="font-semibold text-oric-dark-gray text-sm mt-2">{thesis.title}</p>
            <p className="text-xs text-gray-500 mt-1">Supervisor: {thesis.supervisor}</p>
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-500">Progress</span>
                <span className="font-medium text-oric-royal">{thesis.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-oric-royal rounded-full h-1.5" style={{ width: `${thesis.progress}%` }} />
              </div>
            </div>
          </div>

          {/* Research Grants (Dynamic from Backend) */}
          <div className="bg-white rounded-xl shadow-oric border border-gray-100 p-4">
            <h3 className="font-bold text-oric-navy flex items-center gap-2 text-sm">
              💰 Research Grants ({grants.length})
            </h3>
            <div className="mt-2 space-y-2">
              {grants.slice(0, 2).map((grant) => (
                <div key={grant.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-xs font-medium text-oric-dark-gray">{grant.title}</p>
                    <div className="flex gap-2 mt-0.5 text-[10px] text-gray-500">
                      <span>💰 {grant.amount}</span>
                      <span>📅 {grant.deadline}</span>
                    </div>
                  </div>
                  <button className="text-oric-royal text-xs font-medium hover:underline">
                    Apply →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conferences - Responsive (Dynamic from Backend) */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-oric-navy flex items-center gap-2">
              🌐 Upcoming Conferences ({conferences.length})
            </h3>
            <button className="text-oric-royal text-sm font-medium flex items-center gap-1 hover:underline">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conferences.slice(0, 3).map((conf) => (
              <div key={conf.id} className="bg-white rounded-xl shadow-oric border border-gray-100 p-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-semibold text-oric-dark-gray text-sm">{conf.title}</h4>
                    <div className="flex flex-wrap gap-2 mt-1 text-xs text-gray-500">
                      <span>📅 {conf.date}</span>
                      <span>📍 {conf.location}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    conf.type === 'International' ? 'bg-purple-100 text-purple-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {conf.type}
                  </span>
                </div>
                <button className="mt-3 w-full bg-oric-royal text-white text-xs py-1.5 rounded-lg hover:bg-oric-blue transition">
                  Register →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements */}
        <div>
          <h3 className="text-xl font-bold text-oric-navy mb-4 flex items-center gap-2">
            📢 Announcements
          </h3>
          <div className="space-y-3">
            {announcements.slice(0, 2).map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-xl shadow-oric border border-gray-100 p-4 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-oric-dark-gray text-sm">{announcement.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{announcement.description}</p>
                <p className="text-xs text-gray-400 mt-2">📅 {announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MSDashboardPage;