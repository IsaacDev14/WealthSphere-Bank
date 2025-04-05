import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome, faComments ,
  faUser, faPiggyBank,
  faExchangeAlt,
  faListAlt,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";

const SideBar: React.FC = () => {
  return (
    <main className="top-0 left-0 fixed h-screen bg-indigo-950 pt-2 text-white flex flex-col transition-all duration-300 items-center w-60">
      <div className="h-24 w-24 overflow-hidden rounded-full mb-6 ">
        <img className="h-full w-full " src="src/assets/logo2.jpg" alt="logo" />
      </div>

      <section>
        <nav className="flex flex-col p-0 font-bold  text-2xl w-60 ">
          <button className="text-left py-2 px-2 hover:bg-orange-400  cursor-pointer  ">
            <span>
              <FontAwesomeIcon icon={faHome} className="mr-2" />
            </span>
            DashBoard
          </button>
          <Link
            to="/accounts"
            className=" text-left py-2 px-2 hover:bg-orange-400  cursor-pointer focus:bg-orange-500 "
          >
            <span>
              <FontAwesomeIcon icon={faUser} className="mr-2" />
            </span>
            Accounts
          </Link>
          <button className=" text-left py-2 px-2  hover:bg-orange-400  cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
            </span>
            Transfer Funds
          </button>
          <button className=" text-left py-2 px-2  hover:bg-orange-400  cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faListAlt} className="mr-2" />
            </span>
            Transactions
          </button>
          <button className=" text-left py-2 px-2 hover:bg-orange-400  cursor-pointer">
            <span>
              <FontAwesomeIcon icon={faMoneyBill1Wave} className="mr-2" />
            </span>
            Investments
          </button>
          <hr className="border-b-black"/>
        
        <button className=" text-left mt-6 py-2 px-2 hover:bg-orange-400  cursor-pointer font-normal text-xl">
            <span>
              <FontAwesomeIcon icon={faComments} className="mr-2" />
            </span>
            suggestions
          </button>
          <button className=" text-left py-2 px-2 hover:bg-orange-400  cursor-pointer font-normal text-xl">
            <span>
              <FontAwesomeIcon icon={faPiggyBank} className="mr-2" />
            </span>
            My Goals Tracker:
          </button>

        </nav>
        
      </section>

    </main>
  );
};

export default SideBar;
