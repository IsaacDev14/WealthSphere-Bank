import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExchangeAlt,
  faPiggyBank,
  faFileAlt,
  faArrowTrendUp,
  faArrowTrendDown,
  faWallet,
  faHandHoldingUsd,
  faPercent,
  faPlus,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Accounts: React.FC = () => {
  // Color scheme matching the Dashboard
  const primaryColor = "#991b1b"; // Rich red
  const primaryLight = "#fca5a5"; // Lighter red
  const primaryDark = "#7f1d1d"; // Darker red
  const secondaryColor = "#1e40af"; // Complementary blue
  const accentColor = "#d97706"; // Amber accent
  const successColor = "#059669"; // Green for positive values
  const warningColor = "#d97706"; // Amber for warnings
  const darkText = "#1e293b";
  const lightText = "#64748b";
  const cardBg = "#ffffff";
  const dashboardBg = "#fef2f2"; // Very light red background

  // State for selected account
  const [selectedAccount, setSelectedAccount] = useState(0);

  // Account data with consistent structure for API
  const accounts = [
    {
      name: "Main Account",
      number: "13*******534",
      balance: "12934244.06",
      type: "Checking",
      holder: "James Brown",
      interest: "1.20",
      fees: "500.00",
      currency: "KSH",
      trend: "up",
    },
    {
      name: "Savings Account",
      number: "72*******354",
      balance: "4543456.00",
      type: "Savings",
      holder: "James Brown",
      interest: "2.50",
      fees: "0.00",
      currency: "KSH",
      trend: "up",
    },
    {
      name: "Loan Account",
      number: "10*******893",
      balance: "5345321.00",
      type: "Loan",
      holder: "James Brown",
      interest: "8.75",
      fees: "1200.00",
      currency: "KSH",
      trend: "down",
    },
  ];

  // Transaction data with consistent structure for API
  const transactions = [
    {
      date: "2024-04-22",
      description: "POS Purchase - Supermarket",
      amount: "-54.32",
      balance: "12340.00",
      category: "Shopping",
      status: "completed",
    },
    {
      date: "2024-04-20",
      description: "Payroll Deposit",
      amount: "+2000.00",
      balance: "12894.32",
      category: "Income",
      status: "completed",
    },
    {
      date: "2024-04-18",
      description: "Online Transfer",
      amount: "-500.00",
      balance: "10994.32",
      category: "Transfer",
      status: "completed",
    },
    {
      date: "2024-04-15",
      description: "ATM Withdrawal",
      amount: "-200.00",
      balance: "10894.32",
      category: "Withdrawal",
      status: "completed",
    },
    {
      date: "2024-04-12",
      description: "Mobile Money Transfer",
      amount: "-150.00",
      balance: "11094.32",
      category: "Transfer",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: dashboardBg }}>
      {/* Header */}
      <div className="bg-white shadow-sm p-6">
        <h2 className="text-2xl font-bold" style={{ color: darkText }}>
          Accounts Overview
        </h2>
        <p className="text-sm mt-1" style={{ color: lightText }}>
          Manage your accounts and view detailed information.
        </p>
      </div>

      {/* Main Content */}
      <main className="p-6">
        {/* Accounts Section */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-5">
            <h3 className="font-semibold text-lg" style={{ color: darkText }}>
              My Accounts
            </h3>
            <button
              className="text-sm flex items-center"
              style={{ color: primaryColor }}
            >
              <span className="mr-1">Manage Accounts</span>
              <FontAwesomeIcon icon={faArrowTrendUp} className="text-xs rotate-45" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {accounts.map((account, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer hover:shadow-md ${
                  selectedAccount === index
                    ? "border-blue-200 shadow-md transform scale-[1.02]"
                    : "border-gray-200"
                }`}
                style={{
                  backgroundColor: cardBg,
                  borderColor: selectedAccount === index ? secondaryColor : "#e2e8f0",
                }}
                onClick={() => setSelectedAccount(index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium" style={{ color: darkText }}>
                      {account.name}
                    </h4>
                    <p className="text-xs" style={{ color: lightText }}>
                      {account.number}
                    </p>
                  </div>
                  <FontAwesomeIcon
                    icon={account.trend === "up" ? faArrowTrendUp : faArrowTrendDown}
                    className={account.trend === "up" ? "text-green-500" : "text-red-500"}
                  />
                </div>
                <p className="text-lg font-bold mt-2" style={{ color: darkText }}>
                  {account.currency} {parseFloat(account.balance).toLocaleString("en-US", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
                <p className="text-xs mt-1" style={{ color: lightText }}>
                  {account.type}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mt-5">
            <button
              className="flex items-center justify-center py-2 rounded-lg text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: primaryColor }}
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2 text-sm" />
              <span className="text-sm">Open New Account</span>
            </button>
            <button
              className="flex items-center justify-center py-2 rounded-lg border transition-colors hover:border-gray-400"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              <FontAwesomeIcon icon={faHandHoldingUsd} className="mr-2 text-sm" />
              <span className="text-sm">Request Loan</span>
            </button>
          </div>
        </div>

        {/* Account Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Selected Account Info */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg" style={{ color: darkText }}>
                {accounts[selectedAccount].name} Details
              </h3>
              <FontAwesomeIcon
                icon={accounts[selectedAccount].trend === "up" ? faArrowTrendUp : faArrowTrendDown}
                className={accounts[selectedAccount].trend === "up" ? "text-green-500" : "text-red-500"}
              />
            </div>
            <div className="p-4 rounded-lg mb-4 text-white" style={{ backgroundColor: primaryColor }}>
              <p className="text-xs opacity-80">Account Number: {accounts[selectedAccount].number}</p>
              <p className="text-xl font-bold mt-2">
                {accounts[selectedAccount].currency}{" "}
                {parseFloat(accounts[selectedAccount].balance).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
              <p className="text-xs opacity-80 mt-1">Available Balance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span style={{ color: lightText }}>Account Holder:</span>
                  <span className="font-medium" style={{ color: darkText }}>
                    {accounts[selectedAccount].holder}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: lightText }}>Account Type:</span>
                  <span className="font-medium" style={{ color: darkText }}>
                    {accounts[selectedAccount].type}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span style={{ color: lightText }}>Interest Rate:</span>
                  <span className="font-medium" style={{ color: successColor }}>
                    {accounts[selectedAccount].interest}%
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span style={{ color: lightText }}>Monthly Fees:</span>
                  <span className="font-medium" style={{ color: darkText }}>
                    {accounts[selectedAccount].currency} {parseFloat(accounts[selectedAccount].fees).toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-5">
              <button
                className="flex items-center justify-center py-2 px-4 rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                <FontAwesomeIcon icon={faExchangeAlt} className="mr-2 text-sm" />
                <span className="text-sm">Transfer Money</span>
              </button>
              <button
                className="flex items-center justify-center py-2 px-4 rounded-lg text-white transition-colors hover:opacity-90"
                style={{ backgroundColor: secondaryColor }}
              >
                <FontAwesomeIcon icon={faPiggyBank} className="mr-2 text-sm" />
                <span className="text-sm">Deposit Money</span>
              </button>
              <button
                className="flex items-center justify-center py-2 px-4 rounded-lg border transition-colors hover:border-gray-400"
                style={{ borderColor: primaryColor, color: primaryColor }}
              >
                <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
                <span className="text-sm">View Statement</span>
              </button>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-lg" style={{ color: darkText }}>
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
                        transaction.amount.startsWith("+")
                          ? "bg-green-100 group-hover:bg-green-200"
                          : "bg-red-100 group-hover:bg-red-200"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={transaction.amount.startsWith("+") ? faArrowTrendUp : faArrowTrendDown}
                        className={transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm" style={{ color: darkText }}>
                        {transaction.description}
                      </h4>
                      <p className="text-xs" style={{ color: lightText }}>
                        {new Date(transaction.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                        })}{" "}
                        • {transaction.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span
                      className={`font-medium ${
                        transaction.amount.startsWith("+") ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </span>
                    <span
                      className={`text-xs ${
                        transaction.status === "completed" ? "text-green-500" : "text-amber-500"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="flex items-center justify-center py-2 px-4 rounded-lg border transition-colors hover:border-gray-400 mt-5 mx-auto"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              <FontAwesomeIcon icon={faFileAlt} className="mr-2 text-sm" />
              <span className="text-sm">Download Statement</span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-8 py-6 border-t border-gray-200 bg-white">
        <div className="px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm" style={{ color: lightText }}>
              © 2025 WealthSphere. All rights reserved.
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

export default Accounts;