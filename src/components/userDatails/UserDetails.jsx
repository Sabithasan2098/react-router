import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {
    const navigate = useNavigate()
    const user = useLoaderData();
    const {name,website} = user
    const handleNavigate = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>User details : {name}</h1>
            <h2>Visit: {website}</h2>
            <button onClick={handleNavigate}>Back</button>
        </div>
    );
};

export default UserDetails;