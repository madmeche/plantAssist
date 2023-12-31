import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const isAuthenticated = sessionStorage.getItem("id") || false;
return isAuthenticated === true ? children : <Navigate to = '/' replace />
}

export default PrivateRoute;