import React from "react"
import { useState } from "react"

const UserForm = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createUser = (e) => {

        e.preventDefault();

        const newUser = {username, email, password};
        setUsername("");
        setEmail("");
        setEmail("");
        setPassword("");
        console.log(newUser);

    }

    return (
        <form onSubmit={ createUser }>
            <div>
                <label>Username</label>
                <input type="text" value = {username} onChange = { (e) => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" value = {email} onChange = { (e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type = "text" value={password} onChange={ (e) => setPassword(e.target.value)}/>
                <input type="submit" value="create User"/>
            </div>
        </form>
    )
}

export default UserForm