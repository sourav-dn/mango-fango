import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Link } from "react-router";
import LoadingPage from "./LoadingPage";


const MyPlants = () => {

    const { user } = useContext(Authcontext);
    const [myPlants, setMyPlants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://mango-server-black.vercel.app/myplants?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyPlants(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [user]);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this plant?");
        if (!confirmDelete) return;

        fetch(`https://mango-server-black.vercel.app/plant/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success("Deleted successfully!");
                    setMyPlants(prev => prev.filter(p => p._id !== id));
                }
            });
    };

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="overflow-x-auto mt-5 w-11/12 mx-auto mb-10 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-center">My Added Plants</h2>
            <table className="table w-full">
                <thead>
                    <tr className="bg-green-200 text-black">
                        <th>#</th>
                        <th>Plant Name</th>
                        <th>Category</th>
                        <th>Watering</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myPlants.map((plant, index) => (
                            <tr key={plant._id}>
                                <td>{index + 1}</td>
                                <td>{plant.name}</td>
                                <td>{plant.category}</td>
                                <td>{plant.wateringFrequency}</td>
                                <td className="flex gap-2">
                                    <Link to={`/update/${plant._id}`} className="btn btn-sm bg-green-600">Update</Link>
                                    <button onClick={() => handleDelete(plant._id)} className="btn btn-sm bg-red-500">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyPlants;