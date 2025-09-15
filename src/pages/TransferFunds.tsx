import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faBuildingColumns,
  faMoneyBill1,
  faHandHoldingDollar,
  faPiggyBank,
  faArrowRightArrowLeft,
  faPaperPlane,
  faClock,
  faCheckCircle,
  faXmarkCircle,
  faCreditCard,
  faWallet,
  faUser,
  faDollarSign,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const TransferFunds = () => {
  const primaryColor = "#991b1b";
  const lightText = "#64748b";
  const darkText = "#1e293b";
  const dashboardBg = "#fef2f2";

  // State for tab selection
  const [selectedTab, setSelectedTab] = useState("own");

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
  const [transferStatus, setTransferStatus] = useState(""); // '', 'processing', 'success', 'error'
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Mock account data
  const accounts = [
    { id: "1", name: "Premium Checking", number: "•••• 4856", balance: 324569.0, type: "checking" },
    { id: "2", name: "MaxiSave Account", number: "•••• 7821", balance: 1245786.0, type: "savings" },
    { id: "3", name: "Investment Portfolio", number: "•••• 3094", balance: 894245.0, type: "investment" },
  ];

  // Recent transfers mock data
  const recentTransfers = [
    { id: 1, from: "Premium Checking", to: "MaxiSave Account", amount: 2500, date: "2023-10-22", status: "completed" },
    { id: 2, from: "MaxiSave Account", to: "External Bank", amount: 5000, date: "2023-10-15", status: "completed" },
    { id: 3, from: "Premium Checking", to: "Credit Card", amount: 1200, date: "2023-10-10", status: "completed" },
    { id: 4, from: "Investment Portfolio", to: "External Broker", amount: 10000, date: "2023-10-05", status: "pending" },
  ];

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
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
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Get account icon based on type
  const getAccountIcon = (type) => {
    switch (type) {
      case "checking":
        return faCreditCard;
      case "savings":
        return faBuildingColumns;
      case "investment":
        return faWallet;
      default:
        return faBuildingColumns;
    }
  };

  // Tab button styles
  const tabButtonStyles = "flex flex-col items-center justify-center gap-1 px-3 py-3 rounded-lg transition-colors text-xs md:text-sm";
  const activeTabStyles = "text-white";
  
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case "loan":
        return (
          <div className="space-y-4">
            <button className="w-full p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
              Apply for Loan
            </button>
            
            <div className="border-t my-4"></div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Loan Account Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faHandHoldingDollar} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="loanAccount"
                  value={formData.loanAccount}
                  onChange={handleInputChange}
                  placeholder="Enter loan account number"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount to Pay
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>
          </div>
        );
      
      case "savings":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Savings Goal
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FontAwesomeIcon icon={faPiggyBank} style={{ color: lightText }} />
                </div>
                <input
                  type="text"
                  name="savingsGoal"
                  value={formData.savingsGoal}
                  onChange={handleInputChange}
                  placeholder="Savings goal name (e.g., Vacation Fund)"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Amount to Save
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>
          </div>
        );
      
      default: // "own" tab
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* From Account */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                  From Account
                </label>
                <div className="relative">
                  <select
                    name="fromAccount"
                    value={formData.fromAccount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none appearance-none"
                    style={{ focusBorderColor: primaryColor }}
                    required
                  >
                    <option value="">Select account</option>
                    {accounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.name} ({account.number})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faBuildingColumns} style={{ color: lightText }} />
                  </div>
                </div>
              </div>

              {/* To Account */}
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                  To Account
                </label>
                <div className="relative">
                  <select
                    name="toAccount"
                    value={formData.toAccount}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none appearance-none"
                    style={{ focusBorderColor: primaryColor }}
                    required
                  >
                    <option value="">Select account</option>
                    {accounts.map((account) => (
                      <option key={account.id} value={account.id}>
                        {account.name} ({account.number})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <FontAwesomeIcon icon={faUser} style={{ color: lightText }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Amount */}
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
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Description
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
                  placeholder="Transfer description"
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                  style={{ focusBorderColor: primaryColor }}
                />
              </div>
            </div>

            {/* Schedule Transfer */}
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: darkText }}>
                Schedule Transfer
              </label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schedule"
                    value="now"
                    checked={formData.schedule === "now"}
                    onChange={handleInputChange}
                    className="mr-2"
                    style={{ accentColor: primaryColor }}
                  />
                  <span style={{ color: darkText }}>Transfer now</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="schedule"
                    value="later"
                    checked={formData.schedule === "later"}
                    onChange={handleInputChange}
                    className="mr-2"
                    style={{ accentColor: primaryColor }}
                  />
                  <span style={{ color: darkText }}>Schedule for later</span>
                </label>
              </div>

              {formData.schedule === "later" && (
                <div className="mt-3">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                    style={{ focusBorderColor: primaryColor }}
                    required
                  />
                </div>
              )}
            </div>
          </div>
        );
    }
  };

  // Get button text based on selected tab
  const getButtonText = () => {
    switch (selectedTab) {
      case "mobile": return "Send Money";
      case "other": return "Transfer to Other Bank";
      case "bills": return "Pay Bill";
      case "loan": return "Pay Loan";
      case "savings": return "Add to Savings";
      default: return "Transfer Between Accounts";
    }
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold" style={{ color: darkText }}>
            Transfer Funds
          </h1>
          <p className="text-sm" style={{ color: lightText }}>
            Move money between your accounts or to external recipients
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs Navigation */}
            <div className="mb-6 grid grid-cols-3 gap-2 md:grid-cols-6 bg-gray-100 p-2 rounded-lg">
              <button
                className={`${tabButtonStyles} ${selectedTab === "own" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("own")}
                style={{ backgroundColor: selectedTab === "own" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                <span>Own Bank</span>
              </button>
              <button
                className={`${tabButtonStyles} ${selectedTab === "mobile" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("mobile")}
                style={{ backgroundColor: selectedTab === "mobile" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faMobileScreen} />
                <span>Mobile</span>
              </button>
              <button
                className={`${tabButtonStyles} ${selectedTab === "other" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("other")}
                style={{ backgroundColor: selectedTab === "other" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faBuildingColumns} />
                <span>Other Bank</span>
              </button>
              <button
                className={`${tabButtonStyles} ${selectedTab === "bills" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("bills")}
                style={{ backgroundColor: selectedTab === "bills" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faMoneyBill1} />
                <span>Pay Bills</span>
              </button>
              <button
                className={`${tabButtonStyles} ${selectedTab === "loan" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("loan")}
                style={{ backgroundColor: selectedTab === "loan" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faHandHoldingDollar} />
                <span>Loans</span>
              </button>
              <button
                className={`${tabButtonStyles} ${selectedTab === "savings" ? activeTabStyles : ""}`}
                onClick={() => setSelectedTab("savings")}
                style={{ backgroundColor: selectedTab === "savings" ? primaryColor : "transparent" }}
              >
                <FontAwesomeIcon icon={faPiggyBank} />
                <span>Savings</span>
              </button>
            </div>

            {/* Transfer Form */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              {transferStatus === "processing" && (
                <div className="mb-5 p-4 rounded-lg bg-blue-50 border border-blue-200 flex items-center">
                  <div className="animate-pulse mr-3">
                    <FontAwesomeIcon icon={faClock} className="text-blue-500" />
                  </div>
                  <p className="text-blue-800">Your transfer is being processed...</p>
                </div>
              )}

              {transferStatus === "success" && (
                <div className="mb-5 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center">
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mr-3" />
                  <p className="text-green-800">Transfer completed successfully!</p>
                </div>
              )}

              {transferStatus === "error" && (
                <div className="mb-5 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center">
                  <FontAwesomeIcon icon={faXmarkCircle} className="text-red-500 mr-3" />
                  <p className="text-red-800">Transfer failed. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {renderForm()}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full mt-6 py-3 px-4 rounded-lg text-white font-medium transition-colors hover:opacity-90 flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  {getButtonText()}
                </button>
              </form>
            </div>

            {/* Recent Transfers */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mt-6">
              <h3 className="font-semibold mb-4" style={{ color: darkText }}>
                Recent Transfers
              </h3>
              
              <div className="space-y-3">
                {recentTransfers.map((transfer) => (
                  <div key={transfer.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3" style={{ backgroundColor: `${primaryColor}20` }}>
                        <FontAwesomeIcon icon={faArrowRightArrowLeft} style={{ color: primaryColor }} />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium" style={{ color: darkText }}>
                          {transfer.from} → {transfer.to}
                        </h4>
                        <p className="text-xs" style={{ color: lightText }}>
                          {new Date(transfer.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium" style={{ color: darkText }}>
                        {formatCurrency(transfer.amount)}
                      </p>
                      <span
                        className={`text-xs ${
                          transfer.status === "completed" ? "text-green-600" : "text-amber-600"
                        }`}
                      >
                        {transfer.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Account Summary */}
          <div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-6">
              <h3 className="font-semibold mb-4" style={{ color: darkText }}>
                Your Accounts
              </h3>
              
              <div className="space-y-4">
                {accounts.map((account) => (
                  <div key={account.id} className="p-3 rounded-lg border border-gray-200 transition-all duration-200 hover:shadow-sm">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: `${primaryColor}20` }}>
                        <FontAwesomeIcon icon={getAccountIcon(account.type)} style={{ color: primaryColor }} />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm" style={{ color: darkText }}>
                          {account.name}
                        </h4>
                        <p className="text-xs" style={{ color: lightText }}>
                          {account.number}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-bold" style={{ color: darkText }}>
                      {formatCurrency(account.balance)}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-2" style={{ color: darkText }}>
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="py-2 rounded-lg text-white text-sm transition-colors hover:opacity-90" style={{ backgroundColor: primaryColor }}>
                    Add Account
                  </button>
                  <button className="py-2 rounded-lg border text-sm transition-colors hover:border-gray-400" style={{ borderColor: primaryColor, color: primaryColor }}>
                    View All
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5">
            <h3 className="font-semibold text-lg mb-4" style={{ color: darkText }}>
              Confirm Transfer
            </h3>
            
            <div className="space-y-3 mb-6">
              {selectedTab === "own" && (
                <>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>From:</span>
                    <span style={{ color: darkText }}>
                      {accounts.find(acc => acc.id === formData.fromAccount)?.name || ""}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>To:</span>
                    <span style={{ color: darkText }}>
                      {accounts.find(acc => acc.id === formData.toAccount)?.name || ""}
                    </span>
                  </div>
                </>
              )}
              
              {selectedTab === "mobile" && (
                <div className="flex justify-between">
                  <span style={{ color: lightText }}>To Mobile:</span>
                  <span style={{ color: darkText }}>{formData.mobile}</span>
                </div>
              )}
              
              {selectedTab === "other" && (
                <>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>Bank:</span>
                    <span style={{ color: darkText }}>{formData.bankName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>Account:</span>
                    <span style={{ color: darkText }}>{formData.accountNumber}</span>
                  </div>
                </>
              )}
              
              {selectedTab === "bills" && (
                <>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>Biller:</span>
                    <span style={{ color: darkText }}>{formData.biller}</span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: lightText }}>Bill Number:</span>
                    <span style={{ color: darkText }}>{formData.billNumber}</span>
                  </div>
                </>
              )}
              
              {selectedTab === "loan" && (
                <div className="flex justify-between">
                  <span style={{ color: lightText }}>Loan Account:</span>
                  <span style={{ color: darkText }}>{formData.loanAccount}</span>
                </div>
              )}
              
              {selectedTab === "savings" && (
                <div className="flex justify-between">
                  <span style={{ color: lightText }}>Savings Goal:</span>
                  <span style={{ color: darkText }}>{formData.savingsGoal}</span>
                </div>
              )}
              
              <div className="flex justify-between">
                <span style={{ color: lightText }}>Amount:</span>
                <span className="font-semibold" style={{ color: darkText }}>
                  {formatCurrency(parseFloat(formData.amount || 0))}
                </span>
              </div>
              
              {formData.description && (
                <div className="flex justify-between">
                  <span style={{ color: lightText }}>Description:</span>
                  <span style={{ color: darkText }}>{formData.description}</span>
                </div>
              )}
              
              {selectedTab === "own" && (
                <div className="flex justify-between">
                  <span style={{ color: lightText }}>Schedule:</span>
                  <span style={{ color: darkText }}>
                    {formData.schedule === "now" ? "Immediate" : new Date(formData.date).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={cancelTransfer}
                className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium transition-colors hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={confirmTransfer}
                className="flex-1 py-2 rounded-lg text-white font-medium transition-colors hover:opacity-90"
                style={{ backgroundColor: primaryColor }}
              >
                Confirm Transfer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TransferFunds;