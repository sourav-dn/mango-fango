import { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingPage from "./LoadingPage";


const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://mango-server-black.vercel.app/allplants')
            .then(res => res.json())
            .then(data => {
                setPlants(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

        
        const handleSortByDate = () => {
            const sorted = [...plants].sort(
            (a, b) => new Date(a.nextWatering) - new Date(b.nextWatering)
            );
            setPlants(sorted);
        };

        if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4 text-center"> All Plants</h1>
            <div className="flex gap-3 mb-5 justify-center">
                <button onClick={handleSortByDate} className="btn bg-green-600 text-red-800">
                    Sort by Next Watering Date
                </button>
            </div>
            {/* Card View Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {plants.map((plant, index) => (
                    <div key={index} className="card w-full bg-base-100 shadow-lg rounded-lg overflow-hidden">
                        <figure>
                            <img
                                src={plant.image}
                                alt={plant.name}
                                className="w-full h-64 object-cover rounded-t-lg"
                            />
                        </figure>
                        <div className="card-body p-4">
                            <h2 className="card-title text-xl font-semibold">{plant.name}</h2>
                            <p className="text-gray-500">Category: {plant.category}</p>
                            <p className="text-gray-500">Watering Frequency: {plant.wateringFrequency}</p>
                            <div className="card-actions mt-4">
                                <Link to={`/plant/${plant._id}`}>
                                    <button className="btn btn-sm sm:btn-md bg-green-600 text-red-800 w-full sm:w-auto">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllPlants;