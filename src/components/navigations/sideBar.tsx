import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faComments,
  faUser,
  faPiggyBank,
  faExchangeAlt,
  faListAlt,
  faMoneyBill1Wave,
  faChevronLeft,
  faChevronRight,
  faSignOutAlt,
  faCog,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

interface SideBarProps {
  isCollapsed?: boolean;
  onToggle?: () => void;
}

interface MenuItem {
  path?: string;
  icon: any;
  label: string;
}

const SideBar: React.FC<SideBarProps> = ({ isCollapsed = false, onToggle }) => {
  const location = useLocation();
  const primaryColor = "#991b1b"; 
  const separatorColor = "rgba(255, 255, 255, 0.2)";

  const toggleSidebar = () => {
    if (onToggle) onToggle();
  };

  const menuItems: MenuItem[] = [
    { path: "/", icon: faHome, label: "Dashboard" },
    { path: "/accounts", icon: faUser, label: "Accounts" },
    { path: "/transferfunds", icon: faExchangeAlt, label: "Transfer Funds" },
    { path: "/transactions", icon: faListAlt, label: "Transactions" },
    { path: "/investments", icon: faMoneyBill1Wave, label: "Investments" },
  ];

  const secondaryItems: MenuItem[] = [
    { path: "/suggestions", icon: faComments, label: "Suggestions" },
    { path: "/goals", icon: faPiggyBank, label: "My Goals Tracker" },
  ];

  const footerItems: MenuItem[] = [
    { path: "/settings", icon: faCog, label: "Settings" },
    { path: "/help", icon: faQuestionCircle, label: "Help & Support" },
    { path: "/logout", icon: faSignOutAlt, label: "Sign Out" },
  ];

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`h-screen text-white flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'} shadow-xl bg-red-800`}>
      <div className="flex items-center justify-between p-3 border-b" style={{ borderColor: separatorColor }}>
        {!isCollapsed ? (
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-white flex items-center justify-center">
              <span className="font-bold text-sm text-red-800">WS</span>
            </div>
            <span className="text-lg font-semibold">WealthSphere</span>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <div className="h-8 w-8 overflow-hidden rounded-full bg-white flex items-center justify-center">
              <span className="font-bold text-sm text-red-800">WS</span>
            </div>
          </div>
        )}
        <button onClick={toggleSidebar} className="p-1.5 rounded-full hover:bg-red-700 transition-colors" aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}>
          <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} className="text-sm" />
        </button>
      </div>

      <section className="flex-1 py-2">
        <nav className="space-y-1">
          {menuItems.map((item, index) => (
            item.path ? (
              <Link key={index} to={item.path} className={`flex items-center py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 ${isActiveLink(item.path) ? 'bg-white text-red-800 shadow-md' : 'hover:bg-red-700'}`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-base' : 'mr-2 text-sm'} />
                {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
              </Link>
            ) : (
              <button key={index} className={`flex items-center w-full py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 hover:bg-red-700`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-base' : 'mr-2 text-sm'} />
                {!isCollapsed && <span className="font-medium text-sm">{item.label}</span>}
              </button>
            )
          ))}
        </nav>

        <hr className={`my-4 ${isCollapsed ? 'mx-2' : 'mx-3'}`} style={{ borderColor: separatorColor }} />

        <nav className="space-y-1">
          {secondaryItems.map((item, index) => (
            item.path ? (
              <Link key={index} to={item.path} className={`flex items-center py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 ${isActiveLink(item.path) ? 'bg-white text-red-800 shadow-md' : 'hover:bg-red-700'}`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-base' : 'mr-2 text-sm'} />
                {!isCollapsed && <span className="font-normal text-sm">{item.label}</span>}
              </Link>
            ) : (
              <button key={index} className={`flex items-center w-full py-2 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 hover:bg-red-700`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-base' : 'mr-2 text-sm'} />
                {!isCollapsed && <span className="font-normal text-sm">{item.label}</span>}
              </button>
            )
          ))}
        </nav>
      </section>

      <div className="mt-auto border-t" style={{ borderColor: separatorColor }}>
        {!isCollapsed ? (
          <div className="p-3">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-800">
                <span className="font-semibold text-xs text-white">U</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate text-sm">User Name</p>
                <p className="text-xs truncate text-red-200">user@example.com</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-3 flex justify-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-red-800">
              <span className="font-semibold text-xs text-white">U</span>
            </div>
          </div>
        )}
        
        <nav className="pb-3">
          {footerItems.map((item, index) => (
            item.path ? (
              <Link key={index} to={item.path} className={`flex items-center w-full py-1.5 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 hover:bg-red-700 text-xs ${isActiveLink(item.path) ? 'bg-white text-red-800 shadow-md' : ''}`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-sm mx-auto' : 'mr-2 text-xs'} />
                {!isCollapsed && <span>{item.label}</span>}
              </Link>
            ) : (
              <button key={index} className={`flex items-center w-full py-1.5 ${isCollapsed ? 'px-2 justify-center' : 'px-3'} mx-1 rounded-md transition-all duration-200 hover:bg-red-700 text-xs`}>
                <FontAwesomeIcon icon={item.icon} className={isCollapsed ? 'text-sm mx-auto' : 'mr-2 text-xs'} />
                {!isCollapsed && <span>{item.label}</span>}
              </button>
            )
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;