import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Postdetails = () => {
    const post = useLoaderData();
    const{userId, body} = post;
    return (
        <div>
            <h1>User id:{userId}</h1>
            <p>{body}</p>
        </div>
    );
};

export default Postdetails;