import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ( {post}) => {
    const navigate = useNavigate()
     const{id,userId, title} = post;
     const handleNavigate = () =>{
        navigate(`/post/${id}`)
     }
    return (
        <div className="border-2 border-green-400 m-5 p-2 rounded-lg">
            <h2>User:{userId}</h2>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}> Show details</Link>
            <button onClick={handleNavigate}>Show more</button>
        </div>
    );
};

export default Post;