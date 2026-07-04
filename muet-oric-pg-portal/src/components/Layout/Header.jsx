import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Menu, Bell, Clock } from 'lucide-react';

const Header = ({ onMenuClick }) => {
  const { user } = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-20 border-b border-gray-100 h-16">
      <div className="flex items-center justify-between px-3 sm:px-4 h-full">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Menu size={22} className="text-gray-600" />
          </button>
          
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D0BAQGxKTAJAKoPSA/company-logo_200_200/B4DZfo9EQtHkAU-/0/1751960012437?e=2147483647&v=beta&t=yyCBiw0f0esKh9ZHFOJkIWUmS-IJWZ7J1ZqiL1ZnVV4"
              alt="ORIC MUET"
              className="w-8 h-8 rounded-lg object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://oric.muet.edu.pk/assets/ab1-Cere0Ipv.png";
              }}
            />
            <span className="font-semibold text-gray-800 text-sm sm:text-base hidden sm:inline">
              ORIC MUET PG Portal
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <div className="hidden lg:flex items-center gap-1 text-sm text-gray-500">
            <Clock size={14} />
            <span>{currentTime}</span>
          </div>

          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell size={18} className="text-gray-600 sm:text-[20px]" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <div className="lg:hidden flex items-center gap-2">
            <div className="w-8 h-8 bg-oric-royal rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
              {user?.name?.charAt(0) || 'U'}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;