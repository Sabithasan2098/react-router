import React from 'react';
import { Link } from 'react-router-dom';

const Post = ( {post}) => {
     const{id,userId, title} = post;
    return (
        <div className="border-2 border-green-400 m-5 p-2 rounded-lg">
            <h2>User:{userId}</h2>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}> Show details</Link>
        </div>
    );
};

export default Post;