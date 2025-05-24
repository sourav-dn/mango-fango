import { useEffect, useState } from "react";
import NewPlantsCard from "../../NewPlantsCard/NewPlantsCard";

const NewPlants = () => {
    const [plants, setPlants] = useState([]);
    
    useEffect(() => {
    fetch("https://mango-server-black.vercel.app/newplants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Fetch Error:", err));
        
  }, []);
    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-5 mb-5'>New Plants</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    plants.map(plant => <NewPlantsCard key={plant.name} plant={plant}></NewPlantsCard>)
                }
            </div>
        </div>
    );
};

export default NewPlants;