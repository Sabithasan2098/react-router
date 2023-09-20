import { Link, useNavigate } from "react-router-dom";

 

const User = ({user}) => {
    const navigate = useNavigate()
    const {id,name,email,phone} = user;
    const handleNavigate =() =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className="border-2 border-green-400 m-5 p-2 rounded-lg">
            <h1>{name}</h1>
            <p>email:{email}</p>
            <p>Phone:{phone}</p>
            <Link to={`/user/${id}`}>Show details</Link>
            <button onClick={handleNavigate}>See more</button>
        </div>
    );
};

export default User;