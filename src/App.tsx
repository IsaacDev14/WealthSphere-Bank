import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navigations/Header.tsx";
import SideBar from "./components/navigations/sideBar.tsx";
import Accounts from "./pages/Accounts.tsx";
import TransferFunds from "./pages/TransferFunds.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Suggestions from "./pages/Suggestions.tsx"; 
import Investments from "./pages/Investments.tsx";
import { useState, useEffect } from "react";
import HelpAndSupport from "./pages/HelpAndSupport.tsx";
import Settings from "./pages/Settings.tsx";
import Transactions from "./pages/Transactions.tsx";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setSidebarCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="flex h-screen bg-gray-100 overflow-hidden">
        {/* Sidebar */}
        <div className={`
          ${isMobile && sidebarCollapsed ? 'hidden' : 'fixed md:relative'} 
          z-30 h-full transition-all duration-300
        `}>
          <SideBar 
            isCollapsed={isMobile ? false : sidebarCollapsed} 
            onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
          />
        </div>
        
        {/* Overlay for mobile when sidebar is open */}
        {!sidebarCollapsed && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
            onClick={() => setSidebarCollapsed(true)}
          />
        )}

        {/* Main content area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header 
            onMenuToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
            isSidebarCollapsed={sidebarCollapsed}
          />
          
          <main className="flex-1 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/transferfunds" element={<TransferFunds />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/suggestions" element={<Suggestions />} />
              <Route path="/investments" element={<Investments />} />
              <Route path="/help" element={<HelpAndSupport />} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;