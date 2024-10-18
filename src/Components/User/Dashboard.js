import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-gray-800 w-64 text-white flex flex-col">
        <div className="text-center py-5 text-2xl font-semibold border-b border-gray-700">
          Dashboard
        </div>
        <nav className="flex flex-col space-y-2 mt-5 px-4">
          <a
            href="\#"
            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded"
          >
            <span className="material-icons">dashboard</span>
            <span className="ml-2">Home</span>
          </a>
          <a
            href="\#"
            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded"
          >
            <span className="material-icons">bar_chart</span>
            <span className="ml-2">Analytics</span>
          </a>
          <a
            href="\#"
            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded"
          >
            <span className="material-icons">settings</span>
            <span className="ml-2">Settings</span>
          </a>
          <a
            href="\#"
            className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-700 hover:text-white rounded"
          >
            <span className="material-icons">exit_to_app</span>
            <span className="ml-2">Logout</span>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-700">Welcome Back!</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Button
          </button>
        </div>

        {/* Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-4 rounded-full bg-blue-500 text-white">
              <span className="material-icons">account_balance_wallet</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">
                Total Sales
              </h3>
              <p className="text-gray-500">$9,500</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-4 rounded-full bg-green-500 text-white">
              <span className="material-icons">people</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">New Users</h3>
              <p className="text-gray-500">2,450</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="p-4 rounded-full bg-red-500 text-white">
              <span className="material-icons">shopping_cart</span>
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-700">Orders</h3>
              <p className="text-gray-500">1,200</p>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-700">
            Recent Transactions
          </h2>
          <div className="overflow-auto mt-4">
            <table className="w-full table-auto text-left">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">1</td>
                  <td className="px-4 py-2 border">2024-10-07</td>
                  <td className="px-4 py-2 border">$120</td>
                  <td className="px-4 py-2 border text-green-500">Completed</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">2</td>
                  <td className="px-4 py-2 border">2024-10-06</td>
                  <td className="px-4 py-2 border">$85</td>
                  <td className="px-4 py-2 border text-red-500">Pending</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">3</td>
                  <td className="px-4 py-2 border">2024-10-05</td>
                  <td className="px-4 py-2 border">$200</td>
                  <td className="px-4 py-2 border text-yellow-500">
                    Processing
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2 border">4</td>
                  <td className="px-4 py-2 border">2024-10-04</td>
                  <td className="px-4 py-2 border">$400</td>
                  <td className="px-4 py-2 border text-green-500">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
