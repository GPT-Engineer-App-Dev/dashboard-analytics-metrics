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

          {/* Revenue Metrics */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Revenue Metrics</h2>
              <p>Total Revenue: $50,000</p>
              <p>Expenses: $20,000</p>
              <p>Profit Margin: 60%</p>
            </div>
          </div>

          {/* Other Key Metrics */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Key Metrics</h2>
              <p>Website Traffic: 10,000</p>
              <p>Conversion Rate: 2.5%</p>
              <p>Average Order Value: $200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
