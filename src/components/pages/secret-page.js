import React from "react";
import { Navigate } from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
    
    if (isLoggedIn) {
        return (
            <div className="jumborton text-center">
                <h3>Secret page is unlocked</h3>
            </div>
        );
    };
    
    return <Navigate to="/login" />

};

export default SecretPage;  