import { useNavigate } from "react-router-dom";

 

const About = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>About</h1>
            <p>Its my about section</p>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default About;