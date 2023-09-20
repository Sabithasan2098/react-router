import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate()
    const{userId, body} = post;
    const handleNavigate = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>User id:{userId}</h1>
            <p>{body}</p>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default Postdetails;