import { useEffect, useState } from "react";
import { Link } from "react-router";


const AllPlants = () => {
    const [plants, setPlants] = useState([]);
    useEffect(() => {
        fetch('https://mango-server-black.vercel.app/allplants')
            .then(res => res.json())
            .then(data => setPlants(data));
    }, []);

        
        const handleSortByDate = () => {
            const sorted = [...plants].sort(
            (a, b) => new Date(a.nextWatering) - new Date(b.nextWatering)
            );
            setPlants(sorted);
        };

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold mb-4 text-center"> All Plants</h1>
            <div className="flex gap-3 mb-5 justify-center">
                <button onClick={handleSortByDate} className="btn btn-outline btn-info">
                    Sort by Next Watering Date
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full border">
                    <thead>
                        <tr className="bg-green-200 text-black">
                            <th>Serial</th>
                            <th>Image</th>
                            <th>Plant Name</th>
                            <th>Category</th>
                            <th>Watering Frequency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plants.map((plant, index) => (
                            <tr key={plant._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <img
                                        src={plant.image}
                                        alt={plant.name}
                                        className="w-16 h-16 rounded object-cover"
                                    />
                                </td>
                                <td>{plant.name}</td>
                                <td>{plant.category}</td>
                                <td>{plant.wateringFrequency}</td>
                                <td>
                                    <Link to={`/plant/${plant._id}`}>
                                        <button className="btn btn-sm sm:btn-md bg-green-600 text-white w-full sm:w-auto">
                                            View Details
                                        </button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllPlants;