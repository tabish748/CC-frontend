import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProtectedRoute = () => {
    console.log(localStorage.getItem("token"))
    let isAuthenticated = false;
    if (localStorage.getItem("token")){
     isAuthenticated = true;
    }
    return isAuthenticated ? <Outlet /> : <Navigate to ="/login"/>
}

export default ProtectedRoute;