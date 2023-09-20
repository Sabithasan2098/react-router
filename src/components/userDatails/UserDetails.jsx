import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div>
            <h1>User details : {name}</h1>
            <h2>Visit: {website}</h2>
        </div>
    );
};

export default UserDetails;