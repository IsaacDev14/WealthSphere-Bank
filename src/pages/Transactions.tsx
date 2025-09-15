import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faCalendar,
  faMoneyBillTransfer,
  faDownload,
  faArrowTrendUp,
  faArrowTrendDown,
  faCreditCard,
  faListUl,
} from "@fortawesome/free-solid-svg-icons";

const Transactions: React.FC = () => {
  // Color scheme matching the dashboard
  const primaryColor = "#991b1b"; // Rich red (bg-red-800)
  const darkText = "#1e293b";
  const lightText = "#64748b";
  const cardBg = "#ffffff";
  const dashboardBg = "#fef2f2"; // Very light red background

  // Mock transaction data for demonstration
  const transactions = [
    {
      id: "tx_001",
      date: "2024-09-15",
      description: "POS Purchase - Supermarket",
      amount: -54.32,
      balance: 12340.00,
      type: "debit",
      category: "Shopping",
    },
    {
      id: "tx_002",
      date: "2024-09-14",
      description: "Payroll Deposit",
      amount: 2000.00,
      balance: 12894.32,
      type: "credit",
      category: "Income",
    },
    {
      id: "tx_003",
      date: "2024-09-12",
      description: "Online Transfer to Jane Doe",
      amount: -500.00,
      balance: 10994.32,
      type: "debit",
      category: "Transfer",
    },
    {
      id: "tx_004",
      date: "2024-09-11",
      description: "ATM Withdrawal",
      amount: -200.00,
      balance: 10894.32,
      type: "debit",
      category: "Cash",
    },
    {
      id: "tx_005",
      date: "2024-09-10",
      description: "Mobile Money Transfer - John Smith",
      amount: -150.00,
      balance: 11094.32,
      type: "debit",
      category: "Transfer",
    },
    {
      id: "tx_006",
      date: "2024-09-08",
      description: "Utility Bill Payment",
      amount: -75.00,
      balance: 11244.32,
      type: "debit",
      category: "Bills",
    },
    {
      id: "tx_007",
      date: "2024-09-05",
      description: "Freelance Payment",
      amount: 1500.00,
      balance: 11319.32,
      type: "credit",
      category: "Income",
    },
    {
      id: "tx_008",
      date: "2024-09-02",
      description: "POS Purchase - Restaurant",
      amount: -35.50,
      balance: 9819.32,
      type: "debit",
      category: "Dining",
    },
  ];

  // Helper function to format currency
  const formatCurrency = (amount: number) => {
    return `KSH ${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: darkText }}>
            Transaction History
          </h2>
          <p className="text-sm" style={{ color: lightText }}>
            A complete record of all your account transactions.
          </p>
        </div>
        <button
          className="px-4 py-2 text-sm rounded-full transition-colors hover:bg-opacity-90 flex items-center gap-2"
          style={{ backgroundColor: primaryColor, color: cardBg }}
        >
          <FontAwesomeIcon icon={faDownload} />
          Export Statement
        </button>
      </div>

      <div className="p-6 rounded-xl shadow-md border border-gray-100" style={{ backgroundColor: cardBg }}>
        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="relative w-full md:w-1/2">
            <FontAwesomeIcon icon={faListUl} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-200"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50" style={{ color: darkText }}>
              <FontAwesomeIcon icon={faFilter} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-50" style={{ color: darkText }}>
              <FontAwesomeIcon icon={faCalendar} />
              Date Range
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead style={{ backgroundColor: dashboardBg }}>
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(transaction.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${transaction.type === "credit" ? "bg-green-100" : "bg-red-100"}`}>
                        <FontAwesomeIcon icon={transaction.type === "credit" ? faArrowTrendUp : faArrowTrendDown} className={transaction.type === "credit" ? "text-green-600" : "text-red-600"} />
                      </div>
                      <div>
                        <div className="text-sm font-medium" style={{ color: darkText }}>{transaction.description}</div>
                        <div className="text-xs text-gray-500">{transaction.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <span className={transaction.amount > 0 ? "text-green-600" : "text-red-600"}>
                      {formatCurrency(transaction.amount)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium" style={{ color: darkText }}>
                    {formatCurrency(transaction.balance)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;