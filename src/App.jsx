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
          <a href="/settings" className="ml-4">
            Settings
          </a>
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
              <h2 className="card-title">Monthly Recurring Revenue</h2>
              <p className="text-3xl font-bold">$85,000</p>
              <p className="text-sm text-gray-500 mt-2">In the last 30 days</p>
            </div>
          </div>

          {/* Other Key Metrics */}
          {}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Total Users</h2>
              <p className="text-3xl font-bold">12,500</p>
              <p className="text-sm text-gray-500 mt-2">Current total</p>
            </div>
          </div>

          {}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">User Churn</h2>
              <p className="text-3xl font-bold">3.2%</p>
              <div className="flex items-center">
                <span className="text-green-500 text-sm font-semibold">-1.3% in the last 30 days</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      <footer className="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Made with ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
