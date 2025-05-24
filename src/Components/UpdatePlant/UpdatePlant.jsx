import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";


const UpdatePlant = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);

    useEffect(() => {
        fetch(`https://mango-server-black.vercel.app/plant/${id}`)
            .then(res => res.json())
            .then(data => setPlant(data))
            .catch(err => console.error("Fetch error:", err));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const updatedPlant = {
            image: form.image.value,
            name: form.name.value,
            category: form.category.value,
            description: form.description.value,
            careLevel: form.careLevel.value,
            wateringFrequency: form.wateringFrequency.value,
            lastWatered: form.lastWatered.value,
            nextWatering: form.nextWatering.value,
            healthStatus: form.healthStatus.value
        };

        fetch(`https://mango-server-black.vercel.app/updateplant/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedPlant)
        })
            .then(res => res.json())
            .then(() => {
                toast.success("Plant updated successfully!");
                navigate("/myplants");
            })
            .catch(() => toast.error("Update failed"));
    };

    if (!plant) return <p>Loading...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-5">
      <h2 className="text-2xl font-bold text-center mb-4">Update Plant</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input type="text" name="image" defaultValue={plant.image} className="input input-bordered w-full" required />
        <input type="text" name="name" defaultValue={plant.name} className="input input-bordered w-full" required />
        <select name="category" defaultValue={plant.category} className="select select-bordered w-full">
          <option>Succulent</option><option>Fern</option><option>Flowering</option>
        </select>
        <textarea name="description" defaultValue={plant.description} className="textarea textarea-bordered w-full" />
        <select name="careLevel" defaultValue={plant.careLevel} className="select select-bordered w-full">
          <option>Easy</option><option>Moderate</option><option>Difficult</option>
        </select>
        <input type="text" name="wateringFrequency" defaultValue={plant.wateringFrequency} className="input input-bordered w-full" />
        <input type="date" name="lastWatered" defaultValue={plant.lastWatered} className="input input-bordered w-full" />
        <input type="date" name="nextWatering" defaultValue={plant.nextWatering} className="input input-bordered w-full" />
        <input type="text" name="healthStatus" defaultValue={plant.healthStatus} className="input input-bordered w-full" />
        <input type="submit" value="Update Plant" className="btn bg-green-600 text-white w-full" />
      </form>
    </div>
    );
};

export default UpdatePlant;