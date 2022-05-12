import React from "react";
import { useState } from "react";

//create a function to set hooks
const HookForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenFilledOut, setHasBeenFilledOut] = useState(false);
    const [errorMessageFirstName, setErrorMessageFirstName] = useState("");
    const [errorMessageLastName, setErrorMessageLastName] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessageConfirmPassword, setErrorMessageConfirmPassword] = useState("");
    
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
    
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setErrorMessageFirstName("first name is required");
        }else if (e.target.value.length < 3) {
            setErrorMessageFirstName("first name must be more than 2 characters");
        } else {
            setErrorMessageFirstName("");
            hasBeenFilledOut = true;
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setErrorMessageLastName("last name is required");
        } else if (e.target.value.length < 3) {
            setErrorMessageLastName("last name must be more than 2 characters");
        } else {
            setErrorMessageLastName("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setErrorMessageEmail("email required");
        } else if (e.target.value.length < 6) {
            setErrorMessageEmail("email must be at least 5 characters");
        } else {
            setErrorMessageEmail("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1 ) {
            setErrorMessagePassword("password required")
        } else if (e.target.value.length < 9) {
            setErrorMessagePassword("password must be at least 8 characters")
        } else {
            setErrorMessagePassword("")
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
        setErrorMessageConfirmPassword("password must match confirm password")
        } else {
            setErrorMessageConfirmPassword("")
        }
    }

    return (
        <div>
            <form>{
            hasBeenFilledOut ? <h2>Thanks for following the rules!</h2>:<h2>Welcome, please fill out the form.</h2>
}
                <div>
                    <label>First Name:</label>
                    <p style={{color: "red"}}>{errorMessageFirstName}</p>
                    <input type="text" name="firstName" onChange={handleFirstName} />
                    <label>Last Name:</label>
                    <p style={{color: "red"}}>{errorMessageLastName}</p>
                    <input type="text" name="lastName" onChange={ handleLastName }/>
                    <label>Email:</label>
                    <p style={{color: "red"}}>{errorMessageEmail}</p>
                    <input type="text" name="email" onChange={ handleEmail} />
                    <label>Password:</label>
                    <p style={{color: "red"}}>{errorMessagePassword}</p>
                    <input type="text" name="password" onChange={ handlePassword} />
                    <label>Confirm Password</label>
                    <p>{errorMessageConfirmPassword}</p>
                    <input type="text" name = "confirmPassword" onChange={handleConfirmPassword} />
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