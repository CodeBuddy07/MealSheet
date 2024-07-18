import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Navigate } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen';

const UserProtectedRoute = ({ children }) => {


    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <LoadingScreen></LoadingScreen>
    }

    if (user) {
        
        return children;
    }

    return <Navigate to="/signup"></Navigate>;



};

export default UserProtectedRoute;
UserProtectedRoute.propTypes = {
    children: PropTypes.any,
}