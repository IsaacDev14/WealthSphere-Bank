import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faBuildingColumns,
  faMoneyBill1,
  faHandHoldingDollar,
  faPiggyBank,
  faArrowRightArrowLeft,
  faClock,
  faCheckCircle,
  faXmarkCircle,

  faUser,
  faDollarSign,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

// Type definition for account data
interface Account {
  id: string;
  name: string;
  number: string;
  balance: number;
  type: "checking" | "savings" | "investment";
}

// Type definition for recent transfers
interface RecentTransfer {
  id: number;
  from: string;
  to: string;
  amount: number;
  date: string;
  status: "completed" | "pending";
}

const TransferFunds = () => {
  const primaryColor = "#991b1b";
  const lightText = "#64748b";
  const darkText = "#1e293b";
  const dashboardBg = "#fef2f2";

  // State for tab selection
  const [selectedTab, setSelectedTab] = useState<string>("own");

  // State for form data
  const [formData, setFormData] = useState({
    fromAccount: "",
    toAccount: "",
    amount: "",
    description: "",
    mobile: "",
    bankName: "",
    accountNumber: "",
    biller: "",
    billNumber: "",
    loanAccount: "",
    savingsGoal: "",
    schedule: "now",
    date: "",
  });

  // State for transfer status
  const [transferStatus, setTransferStatus] = useState<string>(""); // '', 'processing', 'success', 'error'
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  // Mock account data
  const accounts: Account[] = [
    { id: "1", name: "Premium Checking", number: "•••• 4856", balance: 324569.0, type: "checking" },
    { id: "2", name: "MaxiSave Account", number: "•••• 7821", balance: 1245786.0, type: "savings" },
    { id: "3", name: "Investment Portfolio", number: "•••• 3094", balance: 894245.0, type: "investment" },
  ];

  // Recent transfers mock data
  const recentTransfers: RecentTransfer[] = [
    { id: 1, from: "Premium Checking", to: "MaxiSave Account", amount: 2500, date: "2023-10-22", status: "completed" },
    { id: 2, from: "MaxiSave Account", to: "External Bank", amount: 5000, date: "2023-10-15", status: "completed" },
    { id: 3, from: "Premium Checking", to: "Credit Card", amount: 1200, date: "2023-10-10", status: "completed" },
    { id: 4, from: "Investment Portfolio", to: "External Broker", amount: 10000, date: "2023-10-05", status: "pending" },
  ];

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  // Confirm transfer
  const confirmTransfer = () => {
    setTransferStatus("processing");

    // Simulate API call
    setTimeout(() => {
      setTransferStatus("success");
      // Reset form after success
      setTimeout(() => {
        setFormData({
          fromAccount: "",
          toAccount: "",
          amount: "",
          description: "",
          mobile: "",
          bankName: "",
          accountNumber: "",
          biller: "",
          billNumber: "",
          loanAccount: "",
          savingsGoal: "",
          schedule: "now",
          date: "",
        });
        setShowConfirmation(false);
        setTransferStatus("");
      }, 2000);
    }, 2000);
  };

  // Cancel transfer
  const cancelTransfer = () => {
    setShowConfirmation(false);
    setTransferStatus("");
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Tab button styles
  const tabButtonStyles = "flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-lg transition-colors text-xs md:text-sm";

  // Render the appropriate form based on selected tab
  const renderForm = () => {
    switch (selectedTab) {
      case "mobile":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Recipient Mobile Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faMobileScreen} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Enter mobile number"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case "other":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Bank Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faBuildingColumns} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  placeholder="Enter bank name"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Account Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faUser} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="Enter account number"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case "bills":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Select Biller
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faMoneyBill1} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="biller"
                  value={formData.biller}
                  onChange={handleInputChange}
                  placeholder="Select biller (e.g., Electric Co, Water Co)"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Bill Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="billNumber"
                  value={formData.billNumber}
                  onChange={handleInputChange}
                  placeholder="Enter bill number"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case "loan":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Loan Account
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: lightText }} />
                </div>
                <select
                  name="loanAccount"
                  value={formData.loanAccount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select a loan account...</option>
                  {/* Mock loan accounts here */}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case "goals":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Select Savings Goal
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faPiggyBank} style={{ color: lightText }} />
                </div>
                <select
                  name="savingsGoal"
                  value={formData.savingsGoal}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select a goal...</option>
                  {/* Mock goals here */}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );

      case "schedule":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Date
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faClock} style={{ color: lightText }} />
                </div>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case "own":
      default:
        return (
          <div className="space-y-4">
            <div>
              <label htmlFor="fromAccount" className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                From Account
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{ color: lightText }} />
                </div>
                <select
                  name="fromAccount"
                  value={formData.fromAccount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select an account...</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} ({account.number})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="toAccount" className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                To Account
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{ color: lightText }} />
                </div>
                <select
                  name="toAccount"
                  value={formData.toAccount}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                >
                  <option value="">Select an account...</option>
                  {accounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {account.name} ({account.number})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faDollarSign} style={{ color: lightText }} />
                </div>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Reason (optional)
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faTag} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Transfer reason"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12" style={{ backgroundColor: dashboardBg }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ color: primaryColor }}>
          Transfer Funds
        </h1>

        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl flex flex-col lg:flex-row gap-8">
          {/* Transfer Form Section */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6" style={{ color: darkText }}>
              New Transfer
            </h2>

            {/* Tab Navigation */}
<div className="flex flex-wrap gap-2 md:gap-4 mb-6" style={{ color: primaryColor }}>
  <button
    onClick={() => setSelectedTab("own")}
    className={`${tabButtonStyles} ${selectedTab === "own" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'} `}
  >
    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="text-lg" />
    <span>To My Own Accounts</span>
  </button>
  <button
    onClick={() => setSelectedTab("other")}
    className={`${tabButtonStyles} ${selectedTab === "other" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faBuildingColumns} className="text-lg" />
    <span>To Other Banks</span>
  </button>
  <button
    onClick={() => setSelectedTab("mobile")}
    className={`${tabButtonStyles} ${selectedTab === "mobile" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faMobileScreen} className="text-lg" />
    <span>To Mobile Money</span>
  </button>
  <button
    onClick={() => setSelectedTab("bills")}
    className={`${tabButtonStyles} ${selectedTab === "bills" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faMoneyBill1} className="text-lg" />
    <span>Pay Bills</span>
  </button>
  <button
    onClick={() => setSelectedTab("loan")}
    className={`${tabButtonStyles} ${selectedTab === "loan" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faHandHoldingDollar} className="text-lg" />
    <span>Repay Loan</span>
  </button>
  <button
    onClick={() => setSelectedTab("goals")}
    className={`${tabButtonStyles} ${selectedTab === "goals" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faPiggyBank} className="text-lg" />
    <span>Fund Savings Goal</span>
  </button>
  <button
    onClick={() => setSelectedTab("schedule")}
    className={`${tabButtonStyles} ${selectedTab === "schedule" ? 'bg-red-800 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
  >
    <FontAwesomeIcon icon={faClock} className="text-lg" />
    <span>Schedule Transfer</span>
  </button>
</div>

            {/* Transfer Form */}
            <form onSubmit={handleSubmit}>
              {renderForm()}
              <button
                type="submit"
                className="mt-6 w-full py-3 rounded-lg text-white font-semibold transition-colors disabled:opacity-50"
                style={{ backgroundColor: primaryColor }}
                disabled={transferStatus === 'processing'}
              >
                {transferStatus === 'processing' ? "Processing..." : "Continue"}
              </button>
            </form>
          </div>

          {/* Recent Transfers Section */}
          <div className="lg:w-1/3">
            <h2 className="text-2xl font-bold mb-6" style={{ color: darkText }}>
              Recent Transfers
            </h2>
            <div className="bg-white rounded-xl shadow-md p-4">
              {recentTransfers.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {recentTransfers.map((transfer) => (
                    <li key={transfer.id} className="py-4 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${transfer.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'}`}>
                          <FontAwesomeIcon
                            icon={transfer.status === 'completed' ? faCheckCircle : faClock}
                            className={`${transfer.status === 'completed' ? 'text-green-500' : 'text-yellow-500'} text-lg`}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm" style={{ color: darkText }}>{transfer.from}</p>
                          <p className="text-xs" style={{ color: lightText }}>to {transfer.to}</p>
                          <p className="text-xs" style={{ color: lightText }}>{transfer.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm" style={{ color: primaryColor }}>{formatCurrency(transfer.amount)}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center py-4">No recent transfers found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative p-8 w-96 mx-auto bg-white rounded-xl shadow-xl transform transition-all">
            <h3 className="text-xl font-bold mb-4 text-center" style={{ color: darkText }}>
              Confirm Transfer
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: lightText }}>From:</span>
                <span className="text-sm font-semibold" style={{ color: darkText }}>{accounts.find(acc => acc.id === formData.fromAccount)?.name || 'N/A'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: lightText }}>To:</span>
                <span className="text-sm font-semibold" style={{ color: darkText }}>
                  {selectedTab === 'other' ? formData.accountNumber : selectedTab === 'mobile' ? formData.mobile : 'N/A'}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: lightText }}>Amount:</span>
                <span className="text-lg font-bold" style={{ color: primaryColor }}>{formatCurrency(Number(formData.amount))}</span>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={confirmTransfer}
                className="w-full py-3 rounded-lg text-white font-semibold transition-colors disabled:opacity-50"
                style={{ backgroundColor: primaryColor }}
                disabled={transferStatus === 'processing'}
              >
                Confirm
              </button>
              <button
                onClick={cancelTransfer}
                className="w-full py-3 rounded-lg text-gray-700 font-semibold transition-colors border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
            {transferStatus === 'success' && (
              <div className="mt-4 flex flex-col items-center text-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-4xl mb-2" />
                <p className="font-semibold text-green-700">Transfer Successful!</p>
              </div>
            )}
            {transferStatus === 'error' && (
              <div className="mt-4 flex flex-col items-center text-center">
                <FontAwesomeIcon icon={faXmarkCircle} className="text-red-500 text-4xl mb-2" />
                <p className="font-semibold text-red-700">Transfer Failed.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferFunds;