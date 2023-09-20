import { useNavigate } from "react-router-dom";

 

const Contact = () => {
    const navigate = useNavigate()
    const handleNavigate = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h1>Contact</h1>
            <h2>Its my contact section</h2>
            <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default Contact;