import React from "react";

const Accounts: React.FC = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="flex-1/3 bg-gray-100 p-6 overflow-y-auto ">
        <h2 className="text-4xl font-bold mb-4 text-center rounded-xl p-2 bg-white rounded-">
          Accounts
        </h2>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Main Account</h3>
          <p className="text-gray-500 text-semi">Acc No: 13*******534</p>
          <p className="text-green-500 font-medium mt-2">
            Balance: ksh. 234,244.00
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Savings Account</h3>
          <p className="text-gray-500 text-semi">Acc No: 72*******354</p>
          <p className="text-green-500 font-medium mt-2">
            Balance: ksh. 1,543,456.00
          </p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm mb-4 cursor-pointer hover:shadow-lg transition">
          <h3 className="font-semibold text-lg">Loan Account</h3>
          <p className="text-gray-500 text-semi">Acc No: 10*******893</p>
          <p className="text-green-500 font-medium mt-2">
            Balance: ksh. 5,345,321.00
          </p>
        </div>
      </div>

      <div className="flex-2/3 bg-gray-50 p-6">
        <h2 className="text-4xl font-semibold mb-4">checking Account</h2>

        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <div>
            <p className="font-medium text-gray-500 mb-2">
              <span className="text-black">Account holder: </span>James Brown
            </p>
            <p className="font-medium text-gray-500 mb-2">
              <span className="text-black">Account type: </span>Savings
            </p>
            <p className="font-medium text-gray-500 mb-2">
              <span className="text-black">interest rate: </span>1.50%
            </p>
            <p className="font-medium text-gray-500 mb-2">
              <span className="text-black">Monthly fees: </span> ksh. 500.00
            </p>
          </div>
          <div className="flex gap-4 ">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90">
              Trasnsfer Money
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer hover:opacity-90">
              Deposit Money
            </button>
            <button className="bg-gray-400 text-black px-4 py-2 rounded-lg cursor-pointer hover:opacity-90">
              View full
            </button>
          </div>
        </div>
        <div className=" bg-white p-6 rounded-xl shadow-md space-y-4 mt-4">
            <h2 className="text-xl font-semibold mb-2">Recent Transactions</h2>
            <table className="w-full text-sm">
        <thead className="border-b">
          <tr>
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Description</th>
            <th className="text-left py-2">Amount</th>
            <th className="text-left py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td>04/22/24</td>
            <td>POS Purchase - Supermarket</td>
            <td>-$54.32</td>
            <td>$12,340.00</td>
          </tr>
          <tr className="border-b">
            <td>04/20/24</td>
            <td>Payroll Deposit</td>
            <td>+2,000.00</td>
            <td>$12,894.32</td>
          </tr>
          <tr className="border-b">
            <td>04/18/24</td>
            <td>Online Transfer</td>
            <td>-500.00</td>
            <td>$10,994.32</td>
          </tr>
          <tr>
            <td>04/15/24</td>
            <td>ATM Withdrawal</td>
            <td>-200.00</td>
            <td>$10,894.32</td>
          </tr>
          <tr className="border-b"></tr>
        </tbody>
      </table>
      <button className="bg-gray-200 px-4 py-2 rounded-lg mt-4">Download Statement</button>
        </div>
        
      </div>

    </div>
  );
};

export default Accounts;
