import React, { useState } from "react";
import "./register1.css";
import { useNavigate,Link } from "react-router-dom";
export const Register1 = (props) => {
    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [nationality, setNationality] = useState('');
    const [ssn, setSsn] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setNumber] = useState('');
    const [address, setAddress] = useState('');
    const [annualincome, setIncome] = useState('');
    const [networth, setNetworth] = useState('');
    const [experience, setExperience] = useState('');
    const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        navigate("/login");
    }

    return (
        <div className="rr">
        <div className="rr1">
            <h2><u>PERSONAL INFORMATION</u></h2>
        <form className="rr2" onSubmit={handleSubmit}>
            <label htmlFor="name">Account Holder Name:</label>
            <input required value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter Your Fullname" /> 
            
            <label htmlFor="occupation">Occupation:</label>
            <input required value={occupation} name="occupation" onChange={(e) => setOccupation(e.target.value)} id="occupation" placeholder="Enter Your Occupation" /> 

            <label htmlFor="gender">Gender:</label>
            <input required value={gender} name="gender" onChange={(e) => setGender(e.target.value)} id="gender" placeholder="Enter Your Gender" /> 

            <label htmlFor="age">Age:</label>
            <input required value={age} name="age" onChange={(e) => setAge(e.target.value)} id="age" placeholder="Enter Your Age" /> 

            <label htmlFor="dateofbirth">Date Of Birth:</label>
            <input required value={dateofbirth} name="dateofbirth" onChange={(e) => setDateofbirth(e.target.value)} id="dateofbirth" placeholder="DD/MM/YYYY" /> 

            <label htmlFor="nationality">Nationality:</label>
            <input required value={nationality} name="nationality" onChange={(e) => setNationality(e.target.value)} id="nationality" placeholder="Enter Your Nationality" /> 

            <label htmlFor="ssn">Ssn:</label>
            <input required value={ssn} name="ssn" onChange={(e) => setSsn(e.target.value)} id="ssn" placeholder="Enter Your Security Number" /> 

            <label htmlFor="email">Email:</label>
            <input required value={email} name="email" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Enter Your E-mail" /> 

            <label htmlFor="phonenumber">Account Number:</label>
            <input required value={phonenumber} name="phonenumber" onChange={(e) => setNumber(e.target.value)} id="phonenumber" placeholder="Enter Your Mobile Number" /> 

            <label htmlFor="address">Address:</label>
            <input required value={address} name="address" onChange={(e) => setAddress(e.target.value)} id="address" placeholder="Enter Your Address" /> 

            <label htmlFor="annualincome">Annual Income:</label>
            <input required value={annualincome} name="annualincome" onChange={(e) => setIncome(e.target.value)} id="annualincome" placeholder="Enter Your Annual Income" /> 

            <label htmlFor="networth">Networth:</label>
            <input required value={networth} name="networth" onChange={(e) => setNetworth(e.target.value)} id="networth" placeholder="Enter Your Networth" /> 

            <label htmlFor="experience">Experience:</label>
            <input required value={experience} name="experience" onChange={(e) => setExperience(e.target.value)} id="experience" placeholder="Enter Your Experience" /> 
            <br/>
            <button className="b" type="submit">SUBMIT</button>
        </form>
            <Link to="/register"><button className="link-btn">Go back</button></Link>
    </div>
    </div>
    )
}
