import React, {useState} from 'react';
import axios from 'axios';
import "./LogReg.css";

function Register(){
    const [newUser, setUser] = useState({
        email: '',
        username: '',
        password: '',
        reenterPassword: ''
    }) 

    function handleRegister(event){
        axios.post("http://localhost:3001/register", newUser);
        event.preventDefault();
    }
    function handleChangeUser(event){
        console.log(event.target);
        const {value, name} = event.target;
        setUser(prevState=>{
            return {
                ...prevState,
                [name] : value
            };
        });
    }

    return (<div>
        {console.log(newUser)}
        <form onSubmit = {handleRegister} className='logreg reg'>
            <h1>Register</h1>
            <input className="inputs"
                type= "email"
                name='email'
                onChange={handleChangeUser}
                value={newUser.email}
                placeholder ="Enter your Email" 
            />
            <input 
                className="inputs"  
                onChange={handleChangeUser}  
                type= "text"name='username' 
                value={newUser.username}  
                placeholder ="Enter your Username" 
            /> 
            <input 
                className="inputs"  
                onChange={handleChangeUser} 
                type="password" 
                name='password' 
                value={newUser.password} 
                placeholder= "Enter your password" 
            />
            <input 
                className="inputs" 
                onChange={handleChangeUser}  
                type="password" 
                name='reenterPassword' 
                value={newUser.reenterPassword} 
                placeholder= "Re-enter your password" 
            />
            <input class='btn' type='submit' value='Register' />
            <p>Or </p>
        
        </form>
    </div>)
}

export default Register;