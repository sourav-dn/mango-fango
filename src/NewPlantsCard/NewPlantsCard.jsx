import { Link } from "react-router";


const NewPlantsCard = ({plant}) => {
    
    const {_id,name,description,healthStatus,image} = plant;
    return (
        <div>
            <div className="card h-full w-full max-w-md lg:max-w-lg mx-auto bg-base-100 shadow-sm rounded-xl overflow-hidden">
                <figure>
                    <img
                        src={image}
                        alt="mango" className="h-64 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Health: {healthStatus}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/plant/${_id}`}>
                            <button className="btn bg-green-600 text-red-800">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewPlantsCard;