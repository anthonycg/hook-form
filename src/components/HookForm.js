import React from "react";
import { useState } from "react";

//create a function to set hooks
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    //create a function to create user
    //takes in an event 
    const createUser = (e) => {
        e.preventDefault();
        
        const newUser = {firstName, lastName, email, password};
        console.log("Welcome", newUser)
    }

    const myStyle = {
        marginTop: "-2vh",
        border: "black solid 1px",
        color: "white",
        backgroundColor: "DodgerBlue"
    }
    return (
        <div>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" onChange={ (e) => setLastName(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" name="email" onChange={ (e) => setEmail(e.target.value)} />
                    <label>Password:</label>
                    <input type="text" name="password" onChange={ (e) => setPassword(e.target.value)} />
                </div>
            </form>
            <div>
                <h4>First Name</h4>
                <p style={myStyle}> {firstName}</p>
                <h4>Last Name</h4>
                <p style={myStyle}>{lastName}</p>
                <h4>Email</h4>
                <p style={myStyle}>{email}</p>
                <h4>Password</h4>
                <p style={myStyle}>{password}</p>
            </div>
        </div>

    )
}


export default HookForm