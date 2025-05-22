import { useEffect, useState } from "react";
import NewPlantsCard from "../../NewPlantsCard/NewPlantsCard";

const NewPlants = () => {
    const [plants, setPlants] = useState([]);
    
    useEffect(() => {
    fetch("http://localhost:3000/newplants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((err) => console.error("Fetch Error:", err));
        // .catch(err => console.error(err));
  }, []);
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-5 mb-5'>New Plants</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    plants.map(plant => <NewPlantsCard key={plant.name} plant={plant}></NewPlantsCard>)
                }
            </div>
        </div>
    );
};

export default NewPlants;