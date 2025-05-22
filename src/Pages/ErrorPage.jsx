import Lottie from "lottie-react";
import notFoundPage from "../assets/Lottie/404-animation.json"
import { Link } from "react-router";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4">
      <div className="max-w-lg w-full">
        <Lottie animationData={notFoundPage} loop={true} />
        <Link to="/">
          <button className="btn btn-primary">Go Back Home</button>
        </Link>
      </div>
    </div>
    );
};

export default ErrorPage;