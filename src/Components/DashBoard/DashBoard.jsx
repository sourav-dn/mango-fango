import { Link, Outlet } from 'react-router';

const DashBoard = () => {
    return (
        <div className="container mx-auto px-4 py-6 min-h-screen">
            {/* Dashboard Sidebar */}
            <div className="flex">
                <div className="w-1/4 bg-gray-200 p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-red-600">Dashboard</h2>
                    <ul className="space-y-4">
                        <li><Link to="/dashboard/overview" className="text-red-600">Overview</Link></li>
                        <li><Link to="/dashboard/allplants" className="text-red-600">All Plants</Link></li>
                        <li><Link to="/dashboard/addplant" className="text-red-600">Add Plant</Link></li>
                        <li><Link to="/dashboard/myplants" className="text-red-600">My Plants</Link></li>
                    </ul>
                </div>

                {/* Main content */}
                <div className="w-3/4 ml-6">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;