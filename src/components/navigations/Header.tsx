import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faEnvelope, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <header className="top-0  h-15 bg-blue-800 flex justify-between items-center p-5">
      <div className="flex justify-between gap-2 items-center content-center">
        <button>
          <FontAwesomeIcon icon={faBars} className="text-white fa-2x " />
        </button>
        <h1 className="text-white font-bold text-3xl">FinPulse<span className="text-orange-500">Bank</span></h1>
      </div>
      <nav className="flex flex-col-end items-center justify-between">
        <div className="relative max-w-md">
          <FontAwesomeIcon
            icon={faSearchengin}
            className="absolute left-1 top-1/2 transform -translate-y-1/2 text-gray-500 "
          />
          <input
            type="search"
            id="search"
            className="pl-5  py-0.7 w-full border border-gray-300 rounded-full text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search for..."
          />
        </div>
        <div>
          <FontAwesomeIcon icon={faBell} className="ml-2 mr-2 col2 text-white" />
          <FontAwesomeIcon icon={faEnvelope} className="mr-2 col2 text-white" />
          <FontAwesomeIcon icon={faMoon} className="mr-2 col2 text-gray-400" />
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src="src/assets/professiona3.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
