import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../../Provider/AuthProvider';
import StatsCard from '../StatsCard/StatsCard';

const OverView = () => {
    const { user } = useContext(Authcontext);
    const [stats, setStats] = useState({ totalPlants: 0, myPlants: 0 });

    useEffect(() => {
        // Fetch the stats data (e.g., from an API or backend)
        fetch('https://mango-server-black.vercel.app/stats') // Example endpoint
            .then((res) => res.json())
            .then((data) => setStats(data));
    }, []);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-red-600">Dashboard Overview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-red-600">
                <StatsCard title="Total Plants" value={stats.totalPlants} />
                <StatsCard title="My Plants" value={stats.myPlants} />
                <StatsCard title="Total Users" value="100" /> {/* Placeholder for Total Users */}
            </div>

            {/* Logged-in User Info */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-red-600">
                <h3 className="text-xl font-semibold">Logged-in User Info</h3>
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                <img
                    className="w-16 h-16 rounded-full mt-4"
                    src={user?.photoURL || '/default-avatar.png'}
                    alt="User"
                />
            </div>
        </div>
    );
};

export default OverView;