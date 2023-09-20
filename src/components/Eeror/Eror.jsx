import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Eror = () => {
    const error = useRouteError()
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.messege}</p>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
};

export default Eror;