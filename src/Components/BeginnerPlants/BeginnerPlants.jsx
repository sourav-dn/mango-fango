import { Tooltip } from "react-tooltip";


const BeginnerPlants = () => {
    const mangoPlants = [
        {
            name: "Alphonso Mango",
            image: "https://i.ibb.co/7JfNkPx3/m1.png",
            tip: "Ideal for pots. Requires sunlight and moderate watering. Sweet and rich in flavor.",
        },
        {
            name: "Kesar Mango",
            image: "https://i.ibb.co/4RKNPctC/m6.jpg",
            tip: "Compact and grows well in containers. Needs good drainage and weekly watering.",
        },
        {
            name: "Dasheri Mango",
            image: "https://i.ibb.co/3m8xsmJm/m5.png",
            tip: "Low maintenance, highly aromatic. Suitable for small gardens and terraces.",
        },
        {
            name: "Langra Mango",
            image: "https://i.ibb.co/3Ypwt9Y3/mango3.png",
            tip: "Popular variety in South Asia. Thrives in humid regions and grows fast.",
        }
    ];
    return (
        <div className="bg-yellow-50 py-10 px-4 mt-10 rounded-lg shadow-md max-w-6xl mx-auto mb-5">
            <h2 className="text-3xl font-bold text-center text-yellow-700 mb-6" data-tooltip-id="mango-tip" data-tooltip-content="These mango varieties are perfect for beginners!">
                🥭 Beginner-Friendly Mango Plants
            </h2>
            <Tooltip id="mango-tip" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {mangoPlants.map((plant, idx) => (
                    <div key={idx} className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden">
                        <img src={plant.image} alt={plant.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-semibold text-orange-800">{plant.name}</h3>
                            <p className="text-sm text-gray-700 mt-2">{plant.tip}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BeginnerPlants;