import React, { useState,useEffect } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
export const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [number, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const navigate=useNavigate();

    const [details,setDetails] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        try{
        const response = await axios.get("http://127.0.0.1:2003/get");
        setDetails(response.data);
        console.log(response); 
        }
    catch(error){
       console.log("error fetching data");
    }
};

const isStrongPassword = (pass) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(pass);
    const hasLowerCase = /[a-z]/.test(pass);
    const hasNumber = /\d/.test(pass);
    const hasSpecialChar = /[!@#$%^&*()]/.test(pass);

    return (
        pass.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumber &&
      hasSpecialChar
    );
  };

    const handleSubmit = () => {
        const data = {
            fullname: name,
            email: email,
            password: pass,
            mobilenumber: number,
            address: address,
        }
        if (details.some((user) => user.email === email)) {
            alert('User already exists.');
        }
        else if (!isStrongPassword(pass)) {
            alert("Please enter a strong password combination.");
        }
        else{
            axios.post("http://127.0.0.1:2003/post", data);
            console.log(data);
            navigate("/register1");
        }
    }

    return (
        <div className="r2">
        <div className="r">
            <h2>Register</h2>
        <form className="r1" onSubmit={handleSubmit}>
            <label htmlFor="name">FullName</label>
            <input required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /> 
            <label htmlFor="email">  Email</label> 
            <input required value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input required value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="phonenumber">Mobile Number</label>
            <input required value={number} onChange={(e) => setNumber(e.target.value)} type="phonenumber" placeholder="Enter your Moblie Number" id="number" name="number" />
            <label htmlFor="address">Address</label>
            <input required value={address} onChange={(e) => setAddress(e.target.value)} type="address" placeholder="Enter Your Address" id="address" name="address" />
            <br/>
            <p class="p">Click proceed,to next step...</p>
            <button className="b" type="submit">Proceed</button>
        </form>
        <Link to="/login"><button className="link-btn">Already have an account? Login here.</button></Link>
    </div>
    </div>
    )
}
