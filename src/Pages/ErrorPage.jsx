import Lottie from "lottie-react";
import notFoundPage from "../assets/Lottie/404-animation.json"

const ErrorPage = () => {
    return (
        <div>
            <Lottie animationData={notFoundPage} loop={true} />
        </div>
    );
};

export default ErrorPage;