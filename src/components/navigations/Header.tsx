import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faMoon, faSun, faSearch, faCog, faGem } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  onMenuToggle: () => void;
  // isSidebarCollapsed was removed because it's not used in this component
}

interface Notification {
  id: number;
  text: string;
  time: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const primaryColor = "#991b1b";

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const notifications: Notification[] = [
    { id: 1, text: "Your transfer was successful", time: "10 min ago" },
    { id: 2, text: "New message from support", time: "30 min ago" },
    { id: 3, text: "Account statement is ready", time: "1 hour ago" }
  ];

  const unreadCount = notifications.length;

  return (
    <header className="sticky top-0 h-14 shadow-md z-20 flex justify-between items-center px-4 lg:px-6" style={{ backgroundColor: primaryColor }}>
      <div className="flex items-center">
        <button 
          onClick={onMenuToggle}
          className="text-white p-1.5 rounded-lg hover:bg-red-800 transition-colors mr-2 md:hidden"
        >
          <FontAwesomeIcon icon={faBars} className="text-lg" />
        </button>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: "#ffffff20" }}>
            <FontAwesomeIcon icon={faGem} className="text-white" />
          </div>
          <h1 className="text-white font-bold text-xl md:text-2xl">
            Wealth<span className="text-orange-300">Sphere</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-9 pr-3 py-1.5 text-sm border border-transparent rounded-full leading-5 bg-red-800 text-white placeholder-red-200 focus:outline-none focus:bg-white focus:text-gray-900 focus:ring-2 focus:ring-red-500 transition-all"
            placeholder="Search transactions, analytics..."
          />
        </div>
      </div>

      <nav className="flex items-center space-x-3">
        <button 
          onClick={toggleDarkMode}
          className="text-white p-1.5 rounded-lg hover:bg-red-800 transition-colors relative"
          aria-label="Toggle dark mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-sm" />
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-white p-1.5 rounded-lg hover:bg-red-800 transition-colors relative"
            aria-label="Notifications"
          >
            <FontAwesomeIcon icon={faBell} className="text-sm" />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg overflow-hidden z-30">
              <div className="p-2 border-b border-gray-200 text-white" style={{ backgroundColor: primaryColor }}>
                <h3 className="font-semibold text-sm">Notifications ({unreadCount})</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map(notification => (
                  <div key={notification.id} className="p-2 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <p className="text-sm text-gray-800">{notification.text}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{notification.time}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t border-gray-200 bg-gray-50 text-center">
                <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                  View All Notifications
                </button>
              </div>
            </div>
          )}
        </div>
        
        <button className="text-white p-1.5 rounded-lg hover:bg-red-800 transition-colors" aria-label="Messages">
          <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
        </button>
        
        <button className="text-white p-1.5 rounded-lg hover:bg-red-800 transition-colors" aria-label="Settings">
          <FontAwesomeIcon icon={faCog} className="text-sm" />
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
              <div className="w-full h-full bg-red-800 flex items-center justify-center">
                <span className="text-white text-sm font-semibold">J</span>
              </div>
            </div>
          </button>
          
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-30">
              <div className="px-3 py-2 border-b border-gray-100">
                <p className="text-sm text-gray-800 font-medium">James B.</p>
                <p className="text-xs text-gray-500">user@example.com</p>
              </div>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Settings</a>
              <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">Help Center</a>
              <div className="border-t border-gray-100"></div>
              <a href="#" className="block px-3 py-2 text-sm text-red-600 hover:bg-red-50">Sign out</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;