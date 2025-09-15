import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCreditCard,
  faExchangeAlt,
  faPiggyBank,

  faArrowTrendUp,
  faArrowTrendDown,
  faPercent,
  faFilter,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard: React.FC = () => {
  // Color scheme with dominant red
  const primaryColor = "#991b1b"; // Rich red (bg-red-800)

  const secondaryColor = "#1e40af"; // Complementary blue
  const accentColor = "#d97706"; // Amber accent
  const darkText = "#1e293b";
  const lightText = "#64748b";

  const dashboardBg = "#fef2f2"; // Very light red background

  // State for interactive elements
  const [timeRange, setTimeRange] = useState("30d");
  const [activeTab, setActiveTab] = useState("overview");

  // Helper function to format currency in KSh
  const formatCurrency = (amount: number) => {
    return `KSh ${amount.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // Mock data with KSh values and updated datatypes
  // const spendingData = [
  //   { category: "Shopping", amount: 12500, percentage: 35, color: primaryColor },
  //   { category: "Food & Dining", amount: 8600, percentage: 24, color: "#ea580c" },
  //   { category: "Transport", amount: 6200, percentage: 17, color: secondaryColor },
  //   { category: "Entertainment", amount: 4800, percentage: 13, color: "#16a34a" },
  //   { category: "Utilities", amount: 3900, percentage: 11, color: "#ca8a04" },
  // ];

  const accounts = [
    { name: "Premium Checking", number: "•••• 4856", balance: 324569.00, trend: "up" },
    { name: "MaxiSave Account", number: "•••• 7821", balance: 1245786.00, trend: "up" },
    { name: "Home Loan", number: "•••• 3094", balance: 4567890.00, trend: "down" },
  ];

  const transactions = [
    { date: "22 Apr", description: "Amazon Online Store", amount: -245.99, category: "Shopping", status: "completed", type: "debit" },
    { date: "21 Apr", description: "Salary Deposit", amount: 5245.00, category: "Income", status: "completed", type: "credit" },
    { date: "20 Apr", description: "Starbucks Coffee", amount: -8.75, category: "Dining", status: "completed", type: "debit" },
    { date: "19 Apr", description: "Electricity Bill", amount: -187.50, category: "Utilities", status: "pending", type: "debit" },
    { date: "18 Apr", description: "Stock Dividend", amount: 345.67, category: "Investment", status: "completed", type: "credit" },
  ];

  const metrics = [
    { title: "Net Worth", value: 1894245, change: "+2.3%", trend: "up", icon: faMoneyBillWave },
    { title: "Monthly Income", value: 12456, change: "+5.7%", trend: "up", icon: faChartLine },
    { title: "Spending", value: 4872, change: "-3.2%", trend: "down", icon: faCreditCard },
    { title: "Investment Return", value: 8.4, change: "+1.2%", trend: "up", icon: faPercent },
  ];

  // Function to render the main chart
  const renderMainChart = () => {
    return (
      <div className="relative h-60">
        {/* Grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-px bg-gray-200"></div>
          ))}
        </div>

        {/* Chart bars */}
        <div className="absolute inset-0 flex items-end justify-between px-2 pb-8">
          {[65, 80, 75, 90, 85, 95, 70, 85, 80, 75, 90, 95].map((height, index) => (
            <div key={index} className="flex flex-col items-center" style={{ width: "7%" }}>
              <div
                className="w-full rounded-t transition-all duration-300 hover:opacity-80 cursor-pointer"
                style={{
                  height: `${height}%`,
                  backgroundColor: index % 3 === 0 ? primaryColor : index % 3 === 1 ? secondaryColor : accentColor,
                  minHeight: "4px",
                }}
                title={`KSh ${(height * 100).toLocaleString()}`}
              ></div>
              <span className="text-xs mt-2" style={{ color: lightText }}>
                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: dashboardBg }}>
      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm">
        <div className="flex px-6">
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "overview" ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("overview")}
            style={activeTab === "overview" ? { borderColor: primaryColor, color: primaryColor } : { borderColor: "transparent" }}
          >
            Overview
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "analytics" ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("analytics")}
            style={activeTab === "analytics" ? { borderColor: primaryColor, color: primaryColor } : { borderColor: "transparent" }}
          >
            Analytics
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "investments" ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("investments")}
            style={activeTab === "investments" ? { borderColor: primaryColor, color: primaryColor } : { borderColor: "transparent" }}
          >
            Investments
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "planning" ? "text-gray-800" : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("planning")}
            style={activeTab === "planning" ? { borderColor: primaryColor, color: primaryColor } : { borderColor: "transparent" }}
          >
            Planning
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="p-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold" style={{ color: darkText }}>
              Financial Dashboard
            </h2>
            <p className="text-sm" style={{ color: lightText }}>
              Welcome back, James. Here's your financial overview.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              className="text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="ytd">Year to date</option>
            </select>
            <button className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center">
              <FontAwesomeIcon icon={faFilter} className="mr-1" />
              Filters
            </button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: `${primaryColor}20` }}>
                  <FontAwesomeIcon icon={metric.icon} style={{ color: primaryColor }} />
                </div>
                <p className="text-sm font-medium" style={{ color: lightText }}>
                  {metric.title}
                </p>
              </div>
              <div className="flex items-end justify-between mt-2">
                <h3 className="text-xl font-bold" style={{ color: darkText }}>
                  {metric.title === "Investment Return" ? `${metric.value}%` : formatCurrency(metric.value)}
                </h3>
                <div className={`flex items-center text-sm font-medium ${metric.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                  {metric.trend === "up" ? <FontAwesomeIcon icon={faArrowTrendUp} className="mr-1" /> : <FontAwesomeIcon icon={faArrowTrendDown} className="mr-1" />}
                  {metric.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Financial Overview Chart */}
          <div className="lg:col-span-2 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold" style={{ color: darkText }}>
                Financial Overview
              </h3>
              <div className="flex space-x-2">
                <button className="text-xs px-2 py-1 rounded" style={{ backgroundColor: `${primaryColor}10`, color: primaryColor }}>
                  Income
                </button>
                <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Expenses</button>
                <button className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">Investments</button>
              </div>
            </div>

            {renderMainChart()}

            <div className="flex justify-between mt-4 pt-4 border-t" style={{ borderColor: "#f1f5f9" }}>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: primaryColor }}></div>
                <div>
                  <p className="text-xs text-gray-500">Income</p>
                  <p className="text-sm font-medium text-green-600">{formatCurrency(45670)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: secondaryColor }}></div>
                <div>
                  <p className="text-xs text-gray-500">Expenses</p>
                  <p className="text-sm font-medium text-red-600">{formatCurrency(12345)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: accentColor }}></div>
                <div>
                  <p className="text-xs text-gray-500">Savings Rate</p>
                  <p className="text-sm font-medium text-blue-600">24.8%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Accounts Summary */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold" style={{ color: darkText }}>
                Accounts
              </h3>
              <button className="text-sm flex items-center" style={{ color: primaryColor }}>
                <span className="mr-1">Manage</span>
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs rotate-45" />
              </button>
            </div>

            <div className="space-y-4">
              {accounts.map((account, index) => (
                <div key={index} className="p-3 rounded-lg border border-gray-200 hover:border-blue-200 transition-all duration-200 hover:shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium" style={{ color: darkText }}>
                        {account.name}
                      </h4>
                      <p className="text-xs" style={{ color: lightText }}>
                        {account.number}
                      </p>
                    </div>
                    <FontAwesomeIcon icon={account.trend === "up" ? faArrowTrendUp : faArrowTrendDown} className={account.trend === "up" ? "text-green-500" : "text-red-500"} />
                  </div>
                  <p className="text-lg font-bold mt-2" style={{ color: darkText }}>
                    {formatCurrency(account.balance)}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 mt-5">
              <button className="flex items-center justify-center py-2 rounded-lg text-white transition-colors hover:opacity-90" style={{ backgroundColor: primaryColor }}>
                <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-sm" />
                <span className="text-sm">Transfer</span>
              </button>
              <button className="flex items-center justify-center py-2 rounded-lg border transition-colors hover:border-gray-400" style={{ borderColor: primaryColor, color: primaryColor }}>
                <FontAwesomeIcon icon={faPiggyBank} className="mr-2 text-sm" />
                <span className="text-sm">Save</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Transactions */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold" style={{ color: darkText }}>
                Recent Transactions
              </h3>
              <button className="text-sm flex items-center" style={{ color: primaryColor }}>
                <span className="mr-1">View All</span>
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs rotate-45" />
              </button>
            </div>

            <div className="space-y-4">
              {transactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between py-2 group cursor-pointer">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors ${
                        transaction.type === "credit" ? "bg-green-100 group-hover:bg-green-200" : "bg-red-100 group-hover:bg-red-200"
                      }`}
                    >
                      <FontAwesomeIcon icon={transaction.type === "credit" ? faArrowTrendUp : faArrowTrendDown} className={transaction.type === "credit" ? "text-green-500" : "text-red-500"} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm" style={{ color: darkText }}>
                        {transaction.description}
                      </h4>
                      <p className="text-xs" style={{ color: lightText }}>
                        {transaction.date} • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className={`font-medium ${transaction.type === "credit" ? "text-green-600" : "text-red-600"}`}>{formatCurrency(transaction.amount)}</span>
                    <span className={`text-xs ${transaction.status === "completed" ? "text-green-500" : "text-amber-500"}`}>{transaction.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Investment Performance */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold" style={{ color: darkText }}>
                Investment Performance
              </h3>
              <button className="text-sm flex items-center" style={{ color: primaryColor }}>
                <span className="mr-1">Details</span>
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs rotate-45" />
              </button>
            </div>

            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-8" style={{ borderColor: primaryColor }}></div>
                <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <span className="text-2xl font-bold" style={{ color: darkText }}>
                    8.4%
                  </span>
                  <span className="text-xs" style={{ color: lightText }}>
                    YTD Return
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${primaryColor}10` }}>
                <p className="text-xs" style={{ color: lightText }}>
                  Stocks
                </p>
                <p className="font-bold" style={{ color: primaryColor }}>
                  +12.3%
                </p>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${secondaryColor}10` }}>
                <p className="text-xs" style={{ color: lightText }}>
                  Bonds
                </p>
                <p className="font-bold" style={{ color: secondaryColor }}>
                  +4.2%
                </p>
              </div>
              <div className="text-center p-3 rounded-lg" style={{ backgroundColor: `${accentColor}10` }}>
                <p className="text-xs" style={{ color: lightText }}>
                  Real Estate
                </p>
                <p className="font-bold" style={{ color: accentColor }}>
                  +7.8%
                </p>
              </div>
              <div className="text-center p-3 rounded-lg bg-gray-100">
                <p className="text-xs" style={{ color: lightText }}>
                  Commodities
                </p>
                <p className="font-bold text-gray-700">+2.4%</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 py-6 border-t border-gray-200 bg-white">
        <div className="px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: lightText }}>
              © 2023 WealthSphere. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-sm hover:underline" style={{ color: primaryColor }}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline" style={{ color: primaryColor }}>
                Terms of Service
              </a>
              <a href="#" className="text-sm hover:underline" style={{ color: primaryColor }}>
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;