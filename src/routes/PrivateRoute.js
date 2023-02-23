import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

//Private Route
const PrivateRoute = ({ children }) => {
    // const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    // //loading spinner
    // if (loading) {
    //     return <h3>Loadinnnnnnnng</h3>
    // }

    // if (user) {
    //     return children;
    // }

    // return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;