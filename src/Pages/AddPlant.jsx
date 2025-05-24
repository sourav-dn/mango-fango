import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";


const AddPlant = () => {
    const { user } = useContext(Authcontext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const plant = {
            image: form.image.value,
            name: form.name.value,
            category: form.category.value,
            description: form.description.value,
            careLevel: form.careLevel.value,
            wateringFrequency: form.wateringFrequency.value,
            lastWatered: form.lastWatered.value,
            nextWatering: form.nextWatering.value,
            healthStatus: form.healthStatus.value,
            userEmail: user?.email,
            userName: user?.displayName
        };

          fetch('http://localhost:3000/addplant', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plant)
        })


        .then(res => res.json())
        .then(data => {
        if (data.insertedId) {
        toast.success("Plant added successfully!");
        form.reset();
        navigate("/allplants");
        }
        })
        
        .catch(err => {
        console.error(err);
        toast.error("Failed to add plant");
        });
};
    
    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md border-green-600 rounded-lg mt-5 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Plant</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />
                <input type="text" name="name" placeholder="Plant Name" className="input input-bordered w-full" required />

                <select name="category" className="select select-bordered w-full" required>
                    <option value="">Select Category</option>
                    <option value="Succulent">Succulent</option>
                    <option value="Fern">Fern</option>
                    <option value="Flowering">Flowering</option>
                </select>

                <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required />

                <select name="careLevel" className="select select-bordered w-full" required>
                    <option value="">Select Care Level</option>
                    <option value="Easy">Easy</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Difficult">Difficult</option>
                </select>

                <input type="text" name="wateringFrequency" placeholder="Watering Frequency (e.g. every 3 days)" className="input input-bordered w-full" required />

                <input type="date" name="lastWatered" className="input input-bordered w-full" required />
                <input type="date" name="nextWatering" className="input input-bordered w-full" required />

                <input type="text" name="healthStatus" placeholder="Health Status (e.g. Healthy)" className="input input-bordered w-full" required />

                <input type="submit" value="Add Plant" className="btn bg-green-600 text-red-600 w-full" />
            </form>
        </div>
    );
};

export default AddPlant;