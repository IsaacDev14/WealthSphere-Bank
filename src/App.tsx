import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navigations/Header.tsx";
import SideBar from "./components/navigations/sideBar.tsx";
import Accounts from "./pages/Accounts.tsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col-2">
        <div className="flex w-60 max-h-screen min-h-screen">
          <SideBar />
        </div>
        <div className="flex-grow flex flex-col">
          <main className="flex-1">
            <Header />
            <Routes>
              <Route path="/accounts" element={<Accounts />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
