import { useEffect, useState } from "react";
import { useParams } from "react-router";


const PlantDetails = () => {

    const { id } = useParams();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/plant/${id}`)
            .then((res) => res.json())
            .then((data) => setPlant(data))
            .catch((err) => console.error("Error:", err));
    }, [id]);

    
    return (
        <div className="max-w-4xl mx-auto p-6 mt-10 mb-10 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-4 text-green-700">{plant.name}</h2>
            <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-96 object-cover rounded mb-4"
            />
            <p className="text-red-600 text-lg mb-2"><strong>Category:</strong> {plant.category}</p>
            <p className="text-red-600 text-lg mb-2"><strong>Care Level:</strong> {plant.careLevel}</p>
            <p className="text-red-600 text-lg mb-2"><strong>Watering Frequency:</strong> {plant.wateringFrequency}</p>
            <p className="text-red-600 text-lg mb-2"><strong>Health Status:</strong> {plant.healthStatus}</p>
            <p className="text-red-600 text-lg mb-2"><strong>Last Watered:</strong> {plant.lastWatered}</p>
            <p className="text-red-600 text-lg mb-2"><strong>Next Watering:</strong> {plant.nextWatering}</p>
            <p className="mt-4 text-md text-gray-800">{plant.description}</p>
        </div>
    );
};

export default PlantDetails;