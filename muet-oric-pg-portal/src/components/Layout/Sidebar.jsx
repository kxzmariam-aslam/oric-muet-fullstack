import { useContext, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { 
  LayoutDashboard, Target, Settings, LogOut, User, 
  FileText, X, Award, GraduationCap,
  DollarSign, Globe, FolderOpen, 
  Rocket, Calendar, BookOpen, 
  Briefcase, Star, MessageSquare
} from 'lucide-react';

const SidebarContent = ({ user, onClose, isActive, menuItems, bottomMenuItems, handleLogout }) => (
  <>
    <div className="p-3 sm:p-4 border-b border-gray-100 bg-oric-navy">
      <div className="flex items-center gap-2 sm:gap-3">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D0BAQGxKTAJAKoPSA/company-logo_200_200/B4DZfo9EQtHkAU-/0/1751960012437?e=2147483647&v=beta&t=yyCBiw0f0esKh9ZHFOJkIWUmS-IJWZ7J1ZqiL1ZnVV4"
          alt="ORIC MUET"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg object-cover bg-white p-1"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://oric.muet.edu.pk/assets/ab1-Cere0Ipv.png";
          }}
        />
        <div>
          <h1 className="font-bold text-white text-xs sm:text-sm">ORIC Portal</h1>
          <p className="text-[8px] sm:text-xs text-oric-light-blue">MUET Jamshoro</p>
        </div>
      </div>
    </div>

    <div className="p-2 m-2 sm:p-3 sm:m-3 bg-oric-blue/30 rounded-oric-sm border border-oric-light-blue/20">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-oric-royal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
          {user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white text-xs sm:text-sm truncate">{user?.name || 'User'}</p>
          <p className="text-[10px] sm:text-xs text-oric-light-blue truncate">{user?.roleName || 'Student'}</p>
        </div>
      </div>
    </div>

    <nav className="px-2 sm:px-3 py-2 space-y-0.5 flex-1 overflow-y-auto">
          
      {menuItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onClose}
          className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-oric-sm transition-all duration-200 text-xs sm:text-sm ${
            isActive(item.path)
              ? 'bg-oric-royal text-white shadow-oric-hover'
              : 'text-gray-400 hover:bg-oric-blue/30 hover:text-white'
          }`}
        >
          <item.icon size={16} className="sm:w-5 sm:h-5" />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
      {[
        { path: '/research-projects', icon: Target, label: 'Research Projects' },
        { path: '/thesis-papers', icon: FileText, label: 'Thesis & Papers' },
        { path: '/grants-funding', icon: DollarSign, label: 'Grants & Funding' },
        { path: '/conferences', icon: Globe, label: 'Conferences' },
        { path: '/startup-funding', icon: Rocket, label: 'Startup Funding' },
        { path: '/activities', icon: Calendar, label: 'Activities' },
        { path: '/scholarships', icon: Award, label: 'Scholarships' },
        { path: '/resources', icon: FolderOpen, label: 'Resources' },
        { path: '/feedback', icon: MessageSquare, label: 'Feedback' },
      ].map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={onClose}
          className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-oric-sm transition-all duration-200 text-xs sm:text-sm ${
            isActive(item.path)
              ? 'bg-oric-royal text-white shadow-oric-hover'
              : 'text-gray-400 hover:bg-oric-blue/30 hover:text-white'
          }`}
        >
          <item.icon size={16} className="sm:w-5 sm:h-5" />
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}

      {/* PhD Extra */}
      {user?.role === 'phd' && (
        <>
          <p className="text-[8px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 sm:px-3 py-1 mt-2">Supervision</p>
          <Link
            to="/supervision"
            onClick={onClose}
            className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-oric-sm transition-all duration-200 text-xs sm:text-sm ${
              isActive('/supervision')
                ? 'bg-oric-royal text-white shadow-oric-hover'
                : 'text-gray-400 hover:bg-oric-blue/30 hover:text-white'
            }`}
          >
            <GraduationCap size={16} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Supervision</span>
          </Link>
        </>
      )}
    </nav>

    <div className="border-t border-gray-100/20 bg-oric-navy/50 px-2 sm:px-3 py-2">
      <Link
        to="/profile"
        onClick={onClose}
        className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-oric-sm transition-all duration-200 text-xs sm:text-sm ${
          isActive('/profile')
            ? 'bg-oric-royal text-white shadow-oric-hover'
            : 'text-gray-400 hover:bg-oric-blue/30 hover:text-white'
        }`}
      >
        <User size={16} className="sm:w-5 sm:h-5" />
        <span className="font-medium">Profile</span>
      </Link>
      <Link
        to="/settings"
        onClick={onClose}
        className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 rounded-oric-sm transition-all duration-200 text-xs sm:text-sm ${
          isActive('/settings')
            ? 'bg-oric-royal text-white shadow-oric-hover'
            : 'text-gray-400 hover:bg-oric-blue/30 hover:text-white'
        }`}
      >
        <Settings size={16} className="sm:w-5 sm:h-5" />
        <span className="font-medium">Settings</span>
      </Link>
      <button
        onClick={handleLogout}
        className="w-full flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 sm:py-2.5 mt-1 rounded-oric-sm text-red-400 hover:bg-red-500/20 hover:text-red-300 transition-all duration-200 text-xs sm:text-sm"
      >
        <LogOut size={16} className="sm:w-5 sm:h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  </>
);

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location.pathname, isOpen, onClose]);

  const handleLogout = () => {
    logout();
    navigate('/login');
    if (onClose) onClose();
  };

  const menuItems = [
    { path: `/${user?.role}-dashboard`, icon: LayoutDashboard, label: 'Dashboard' },
  ];

  const isActive = (path) => {
    if (path === `/${user?.role}-dashboard`) {
      return location.pathname === `/${user?.role}-dashboard`;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col fixed left-0 top-0 bottom-0 w-64 bg-oric-navy border-r border-oric-blue/20 z-30 shadow-oric">
        <SidebarContent 
          user={user}
          onClose={onClose}
          isActive={isActive}
          menuItems={menuItems}
          bottomMenuItems={[]}
          handleLogout={handleLogout}
        />
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fadeIn" onClick={onClose} />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 bottom-0 w-72 bg-oric-navy z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          <div className="p-3 border-b border-oric-blue/20 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src="https://media.licdn.com/dms/image/v2/D4D0BAQGxKTAJAKoPSA/company-logo_200_200/B4DZfo9EQtHkAU-/0/1751960012437?e=2147483647&v=beta&t=yyCBiw0f0esKh9ZHFOJkIWUmS-IJWZ7J1ZqiL1ZnVV4"
                alt="ORIC MUET"
                className="w-8 h-8 rounded-lg object-cover bg-white p-1"
              />
              <span className="font-bold text-white text-sm">ORIC MUET</span>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white">
              <X size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            <SidebarContent 
              user={user}
              onClose={onClose}
              isActive={isActive}
              menuItems={menuItems}
              bottomMenuItems={[]}
              handleLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;