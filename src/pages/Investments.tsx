import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faArrowTrendUp,
  faArrowTrendDown,
  faDollarSign,
  faPlus,
  faExchangeAlt,
  faInfoCircle,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Define a type for your stock data to ensure type safety
interface Stock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  shares: number;
  value: number;
}

const Investments = () => {
  const primaryColor = "#991b1b";
  const lightText = "#64748b";
  const darkText = "#1e293b";
  const dashboardBg = "#fef2f2";

  const [timeRange, setTimeRange] = useState("ytd");
  const [activeTab, setActiveTab] = useState("portfolio");
  // Correct the type of selectedStock to allow for a Stock object or null
  const [selectedStock, setSelectedStock] = useState<Stock | null>(null);

  // Mock investment data
  const portfolio = {
    totalValue: 894245,
    dayChange: 5245,
    dayChangePercent: 0.59,
    totalGain: 124567,
    totalGainPercent: 16.2,
    allocation: [
      { category: "Stocks", value: 456789, percentage: 51, change: 12.3 },
      { category: "Bonds", value: 178549, percentage: 20, change: 4.2 },
      { category: "Real Estate", value: 142839, percentage: 16, change: 7.8 },
      { category: "Commodities", value: 71419, percentage: 8, change: 2.4 },
      { category: "Cryptocurrency", value: 44649, percentage: 5, change: -3.7 },
    ],
  };

  // Mock stock data
  const stocks: Stock[] = [
    { symbol: "AAPL", name: "Apple Inc.", price: 175.43, change: 2.35, changePercent: 1.36, shares: 25, value: 4385.75 },
    { symbol: "MSFT", name: "Microsoft Corp.", price: 337.69, change: -1.24, changePercent: -0.37, shares: 15, value: 5065.35 },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 138.21, change: 3.67, changePercent: 2.73, shares: 20, value: 2764.20 },
    { symbol: "AMZN", name: "Amazon.com Inc.", price: 135.07, change: 0.89, changePercent: 0.66, shares: 18, value: 2431.26 },
    { symbol: "TSLA", name: "Tesla Inc.", price: 212.08, change: -5.32, changePercent: -2.45, shares: 10, value: 2120.80 },
    { symbol: "VTI", name: "Vanguard Total Stock Market ETF", price: 224.56, change: 1.23, changePercent: 0.55, shares: 45, value: 10105.20 },
  ];

  // Format currency
  // Explicitly type the 'amount' parameter as 'number'
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Format percentage
  // Explicitly type the 'value' parameter as 'number'
  const formatPercent = (value: number): string => {
    return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: dashboardBg }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold" style={{ color: darkText }}>
            Investments
          </h1>
          <p className="text-sm" style={{ color: lightText }}>
            Monitor and manage your investment portfolio
          </p>
        </div>

        {/* Portfolio Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: `${primaryColor}20` }}>
                <FontAwesomeIcon icon={faChartLine} style={{ color: primaryColor }} />
              </div>
              <p className="text-sm font-medium" style={{ color: lightText }}>Portfolio Value</p>
            </div>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl font-bold" style={{ color: darkText }}>{formatCurrency(portfolio.totalValue)}</h3>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: `${primaryColor}20` }}>
                <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: primaryColor }} />
              </div>
              <p className="text-sm font-medium" style={{ color: lightText }}>Daily Change</p>
            </div>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl font-bold" style={{ color: portfolio.dayChange >= 0 ? 'green' : 'red' }}>
                {formatCurrency(portfolio.dayChange)}
              </h3>
              <div className={`flex items-center text-sm font-medium ${portfolio.dayChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                <FontAwesomeIcon icon={portfolio.dayChange >= 0 ? faArrowTrendUp : faArrowTrendDown} className="mr-1" />
                {formatPercent(portfolio.dayChangePercent)}
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mr-2" style={{ backgroundColor: `${primaryColor}20` }}>
                <FontAwesomeIcon icon={faDollarSign} style={{ color: primaryColor }} />
              </div>
              <p className="text-sm font-medium" style={{ color: lightText }}>Total Gain/Loss</p>
            </div>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-xl font-bold" style={{ color: portfolio.totalGain >= 0 ? 'green' : 'red' }}>
                {formatCurrency(portfolio.totalGain)}
              </h3>
              <div className={`flex items-center text-sm font-medium ${portfolio.totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                <FontAwesomeIcon icon={portfolio.totalGain >= 0 ? faArrowTrendUp : faArrowTrendDown} className="mr-1" />
                {formatPercent(portfolio.totalGainPercent)}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-6 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "portfolio" ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ backgroundColor: activeTab === "portfolio" ? primaryColor : 'transparent' }}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab("stocks")}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "stocks" ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ backgroundColor: activeTab === "stocks" ? primaryColor : 'transparent' }}
            >
              Stocks
            </button>
            <button
              onClick={() => setActiveTab("analysis")}
              className={`px-4 py-2 rounded-lg transition-colors ${activeTab === "analysis" ? 'text-white' : 'text-gray-700 hover:bg-gray-100'}`}
              style={{ backgroundColor: activeTab === "analysis" ? primaryColor : 'transparent' }}
            >
              Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Filters and Search */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className={`block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none focus:ring-[${primaryColor}]`}
                      placeholder="Search investments..."
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <select 
                    className={`text-sm border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:outline-none focus:ring-[${primaryColor}]`}
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                  >
                    <option value="1d">1D</option>
                    <option value="1w">1W</option>
                    <option value="1m">1M</option>
                    <option value="3m">3M</option>
                    <option value="ytd">YTD</option>
                    <option value="1y">1Y</option>
                  </select>
                  
                  <button className="text-sm px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center">
                    <FontAwesomeIcon icon={faFilter} className="mr-1" />
                    Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Portfolio Content */}
            {activeTab === "portfolio" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="border-b border-gray-100 px-6 py-3 bg-gray-50 flex justify-between items-center">
                  <h3 className="font-semibold" style={{ color: darkText }}>
                    Asset Allocation
                  </h3>
                  <button className="text-sm flex items-center" style={{ color: primaryColor }}>
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
                    Details
                  </button>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48">
                      {/* This would be a pie chart in a real application */}
                      <div className="absolute inset-0 rounded-full border-8" style={{ borderColor: primaryColor }}></div>
                      <div className="absolute inset-0 flex items-center justify-center flex-col">
                        <span className="text-2xl font-bold" style={{ color: darkText }}>{formatPercent(portfolio.totalGainPercent)}</span>
                        <span className="text-xs" style={{ color: lightText }}>YTD Return</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {portfolio.allocation.map((asset, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{ 
                            backgroundColor: 
                              index === 0 ? primaryColor : 
                              index === 1 ? '#1e40af' : 
                              index === 2 ? '#d97706' : 
                              index === 3 ? '#059669' : '#6b7280' 
                          }}></div>
                          <span className="text-sm" style={{ color: darkText }}>{asset.category}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium" style={{ color: darkText }}>{asset.percentage}%</p>
                          <p className={`text-xs ${asset.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {formatPercent(asset.change)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Stocks Content */}
            {activeTab === "stocks" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="border-b border-gray-100 px-6 py-3 bg-gray-50 flex justify-between items-center">
                  <h3 className="font-semibold" style={{ color: darkText }}>
                    Your Holdings
                  </h3>
                  <button className="text-sm flex items-center" style={{ color: primaryColor }}>
                    <FontAwesomeIcon icon={faPlus} className="mr-1" />
                    Add Holding
                  </button>
                </div>
                
                <div className="divide-y divide-gray-100">
                  {stocks.map((stock) => (
                    <div 
                      key={stock.symbol} 
                      className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedStock(stock)}
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3 bg-gray-100">
                          <span className="font-bold text-sm">{stock.symbol.substring(0, 2)}</span>
                        </div>
                        <div>
                          <h4 className="font-medium text-sm" style={{ color: darkText }}>
                            {stock.symbol}
                          </h4>
                          <p className="text-xs" style={{ color: lightText }}>
                            {stock.name}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm" style={{ color: darkText }}>
                          {formatCurrency(stock.price)}
                        </p>
                        <p className={`text-xs ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {formatPercent(stock.changePercent)}
                        </p>
                      </div>
                      <div className="text-right ml-4">
                        <p className="font-medium text-sm" style={{ color: darkText }}>
                          {formatCurrency(stock.value)}
                        </p>
                        <p className="text-xs" style={{ color: lightText }}>
                          {stock.shares} shares
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Analysis Content */}
            {activeTab === "analysis" && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="border-b border-gray-100 px-6 py-3 bg-gray-50">
                  <h3 className="font-semibold" style={{ color: darkText }}>
                    Portfolio Analysis
                  </h3>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="font-medium mb-2" style={{ color: darkText }}>Performance vs Benchmarks</h4>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm" style={{ color: lightText }}>Your Portfolio</span>
                        <span className="text-sm font-medium text-green-600">{formatPercent(portfolio.totalGainPercent)}</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm" style={{ color: lightText }}>S&P 500</span>
                        <span className="text-sm font-medium">+14.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm" style={{ color: lightText }}>NASDAQ</span>
                        <span className="text-sm font-medium">+18.7%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2" style={{ color: darkText }}>Risk Analysis</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm" style={{ color: lightText }}>Volatility</span>
                          <span className="text-sm font-medium" style={{ color: darkText }}>Medium</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm" style={{ color: lightText }}>Diversification</span>
                          <span className="text-sm font-medium" style={{ color: darkText }}>Good</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm" style={{ color: lightText }}>Liquidity</span>
                          <span className="text-sm font-medium" style={{ color: darkText }}>High</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 sticky top-6">
              <h3 className="font-semibold mb-4" style={{ color: darkText }}>
                Quick Actions
              </h3>
              
              <div className="space-y-3 mb-6">
                <button className="w-full py-3 rounded-lg text-white transition-colors hover:opacity-90 flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
                  <FontAwesomeIcon icon={faPlus} className="mr-2" />
                  Add Funds
                </button>
                
                <button className="w-full py-3 rounded-lg border transition-colors hover:border-gray-400 flex items-center justify-center" style={{ borderColor: primaryColor, color: primaryColor }}>
                  <FontAwesomeIcon icon={faExchangeAlt} className="mr-2" />
                  Trade
                </button>
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-medium mb-2" style={{ color: darkText }}>
                  Market Overview
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: lightText }}>S&P 500</span>
                    <span className="text-sm font-medium text-green-600">+0.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: lightText }}>DOW JONES</span>
                    <span className="text-sm font-medium text-red-600">-0.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: lightText }}>NASDAQ</span>
                    <span className="text-sm font-medium text-green-600">+1.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm" style={{ color: lightText }}>BITCOIN</span>
                    <span className="text-sm font-medium text-green-600">+3.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stock Detail Modal */}
      {selectedStock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg" style={{ color: darkText }}>
                {selectedStock.symbol} - {selectedStock.name}
              </h3>
              <button 
                onClick={() => setSelectedStock(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span style={{ color: lightText }}>Current Price:</span>
                <span style={{ color: darkText }}>{formatCurrency(selectedStock.price)}</span>
              </div>
              
              <div className="flex justify-between">
                <span style={{ color: lightText }}>Daily Change:</span>
                <span className={`font-semibold ${selectedStock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatPercent(selectedStock.changePercent)}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span style={{ color: lightText }}>Shares Owned:</span>
                <span style={{ color: darkText }}>{selectedStock.shares}</span>
              </div>
              
              <div className="flex justify-between">
                <span style={{ color: lightText }}>Total Value:</span>
                <span style={{ color: darkText }}>{formatCurrency(selectedStock.value)}</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium transition-colors hover:bg-gray-100">
                Sell
              </button>
              <button className="flex-1 py-2 rounded-lg text-white font-medium transition-colors hover:opacity-90" style={{ backgroundColor: primaryColor }}>
                Buy More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Investments;