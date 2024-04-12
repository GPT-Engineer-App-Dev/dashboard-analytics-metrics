import { FaUser } from "react-icons/fa";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Menubar */}
      <div className="navbar bg-base-100 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Business Dashboard</a>
          <div className="breadcrumbs ml-4">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Documents</a>
              </li>
              <li>Add Document</li>
            </ul>
          </div>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <FaUser className="w-full h-full p-2" />
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Sales Metrics */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sales Metrics</h2>
              <p>Total Sales: $10,000</p>
              <p>New Customers: 50</p>
              <p>Repeat Customers: 100</p>
            </div>
          </div>

          {}
          {}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Revenue Metrics</h2>
              <p>Monthly Recurring Revenue (MRR): $50,000</p>
              <p>Expenses: $20,000</p>
              <p>Profit Margin: 60%</p>
            </div>
          </div>

          {/* Other Key Metrics */}
          {}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Total Users</h2>
              <p className="text-3xl font-bold">5,250</p>
              <div className="flex items-center">
                <span className="text-green-500 text-sm font-semibold">+250 this week</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">User Churn</h2>
              <p className="text-3xl font-bold">4.5%</p>
              <div className="flex items-center">
                <span className="text-red-500 text-sm font-semibold">+0.5% this month</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
