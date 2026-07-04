import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import MainLayout from '../Layout/MainLayout';
import { 
  Target, FileText, DollarSign, Users,
  Clock, BookOpen, Award, Globe,
  GraduationCap, Briefcase, ChevronRight
} from 'lucide-react';
import { getProjects, getGrants, getConferences, getScholarships } from '../../services/api';

const PhDDashboardPage = () => {
  const { user } = useContext(AuthContext);
  
  // ✅ State for dynamic data
  const [projects, setProjects] = useState([]);
  const [grants, setGrants] = useState([]);
  const [conferences, setConferences] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    research: 0,
    publications: 89,
    grants: 'PKR 84M',
    citations: '1,247'
  });

  // ✅ Load data from backend
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    
    const projectsData = await getProjects();
    const grantsData = await getGrants();
    const conferencesData = await getConferences();
    const scholarshipsData = await getScholarships();

    if (projectsData.success) {
      setProjects(projectsData.projects);
      setStats(prev => ({
        ...prev,
        research: projectsData.projects.filter(p => p.status === 'Open').length
      }));
    }

    if (grantsData.success) {
      setGrants(grantsData.grants);
    }

    if (conferencesData.success) {
      setConferences(conferencesData.conferences);
    }

    if (scholarshipsData.success) {
      setScholarships(scholarshipsData.scholarships);
    }

    setLoading(false);
  };

  // PhD Stats Data
  const statsData = [
    { label: 'Active Research', value: stats.research, change: '+3 this semester', icon: Target, color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { label: 'Publications', value: stats.publications, change: '+12 this year', icon: FileText, color: 'text-pink-600', bg: 'bg-pink-50' },
    { label: 'Research Grants', value: stats.grants, change: `${grants.length} active grants`, icon: DollarSign, color: 'text-purple-600', bg: 'bg-purple-50' },
    { label: 'Citations', value: stats.citations, change: '+234 this year', icon: Users, color: 'text-orange-600', bg: 'bg-orange-50' },
  ];

  // Programs (PhD specific)
  const programs = [
    {
      title: 'PhD Research Program',
      description: 'Advanced research program with focus on innovation, publication, and technology development. Supervised by experienced faculty.',
      badge: 'Core Program',
      badgeColor: 'bg-blue-100 text-blue-700',
      action: 'Open →',
      actionColor: 'bg-blue-600'
    },
    {
      title: 'Research Methodology & Ethics',
      description: 'Advanced research methodology training, ethical research practices, and publication strategies for PhD scholars.',
      badge: 'Training',
      badgeColor: 'bg-green-100 text-green-700',
      action: 'Open →',
      actionColor: 'bg-green-600'
    }
  ];

  // PhD Announcements
  const announcements = [
    {
      id: 1,
      title: '🔬 International Research Symposium 2025',
      description: 'International Research Symposium scheduled for 15-17 December 2025. PhD scholars are invited to present their research and submit papers.',
      date: 'June 10, 2025'
    },
    {
      id: 2,
      title: '📚 Research Publication Workshop',
      description: 'A comprehensive workshop on research publication strategies, journal selection, and manuscript preparation for PhD students.',
      date: 'June 5, 2025'
    },
    {
      id: 3,
      title: '📋 HEC PhD Scholarship Application Open',
      description: 'HEC PhD Scholarship applications are now open for the academic year 2025-26. Submit your applications before July 15, 2025.',
      date: 'June 1, 2025'
    }
  ];

  if (loading) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-oric-royal border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-500">Loading PhD Dashboard...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        
        {/* ===== DASHBOARD TITLE ===== */}
        <h1 className="text-2xl font-bold text-oric-navy flex items-center gap-2">
          📊 Dashboard
          <span className="text-sm font-normal text-gray-400 ml-2">
            {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}
          </span>
        </h1>

        {/* ===== STATS CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg hover:translate-y-[-4px] transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-oric-navy mt-1">{stat.value}</p>
                  <p className="text-xs text-oric-success mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`${stat.color}`} size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== RESEARCH PROJECTS (From Backend) ===== */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-oric-light-blue/30 to-white flex justify-between items-center">
            <h2 className="text-lg font-bold text-oric-navy flex items-center gap-2">
              🔬 Research Projects ({projects.length})
            </h2>
            <button className="text-oric-royal text-sm hover:text-oric-navy font-medium flex items-center gap-1">
              View All <ChevronRight size={16} />
            </button>
          </div>
          <div className="divide-y divide-gray-100">
            {projects.length > 0 ? (
              projects.slice(0, 4).map((project) => (
                <div key={project.id} className="p-4 flex flex-wrap justify-between items-center hover:bg-gray-50 transition">
                  <div>
                    <p className="font-medium text-oric-dark-gray">{project.title}</p>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Briefcase size={12} />
                        Supervisor: {project.supervisor}
                      </span>
                      <span className="flex items-center gap-1">
                        {project.department}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                      project.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {project.status}
                    </span>
                    {project.status === 'Open' && (
                      <button className="text-oric-royal text-sm hover:text-oric-navy font-medium">
                        Apply →
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                No research projects available
              </div>
            )}
          </div>
        </div>

        {/* ===== GRANTS AND FUNDING ===== */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-oric-navy flex items-center gap-2">
                💰 Grants and Funding ({grants.length})
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Explore HEC PhD Funding, NRPU Research Grants, International Fellowships, and travel grants for PhD scholars.
              </p>
            </div>
            <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium">
              Open →
            </button>
          </div>
          {grants.length > 0 && (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {grants.slice(0, 2).map((grant) => (
                <div key={grant.id} className="bg-oric-gray p-3 rounded-oric-sm">
                  <p className="font-medium text-oric-dark-gray text-sm">{grant.title}</p>
                  <div className="flex gap-3 mt-1 text-xs text-gray-500">
                    <span>💰 {grant.amount}</span>
                    <span>📅 {grant.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ===== INNOVATION AND IP MANAGEMENT ===== */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-oric-navy flex items-center gap-2">
                💡 Innovation and IP Management
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                File patents, protect intellectual property, commercialize research, and access technology transfer support for PhD innovations.
              </p>
            </div>
            <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium">
              Open →
            </button>
          </div>
        </div>

        {/* ===== PHD SUPERVISION SECTION ===== */}
        <div className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold text-oric-navy flex items-center gap-2">
                🎓 PhD Supervision
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                Manage PhD supervision, track student progress, and access resources for effective research guidance and mentorship.
              </p>
            </div>
            <button className="bg-oric-royal text-white px-4 py-2 rounded-oric-sm hover:bg-oric-blue transition text-sm font-medium">
              Open →
            </button>
          </div>
        </div>

        {/* ===== ANNOUNCEMENTS ===== */}
        <div>
          <h3 className="text-xl font-bold text-oric-navy mb-4 flex items-center gap-2">
            📢 Announcements
          </h3>

          <div className="space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-2xl shadow-oric border border-gray-100 p-5 hover:shadow-oric-lg transition-all duration-300">
                <h4 className="text-lg font-semibold text-oric-dark-gray">{announcement.title}</h4>
                <p className="text-sm text-gray-500 mt-1">{announcement.description}</p>
                <p className="text-xs text-gray-400 mt-3">📅 {announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PhDDashboardPage;