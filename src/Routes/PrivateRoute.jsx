import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();
  
    if(loading){
        return <LoadingPage></LoadingPage>;
    }

    if(user && user?.email){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    );
};

export default PrivateRoute;