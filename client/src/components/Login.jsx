import React, {useState} from 'react';
import "./LogReg.css";
function Login(){

    const [logUser, setUser] = useState({
        email: '',
        password: ''
    })
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
        {console.log(logUser)}
        <form className='logreg log'>
            <h1>Login</h1>
            <input className="inputs"
                type= "email"
                name='email'
                onChange={handleChangeUser}
                value={logUser.email}
                placeholder ="Enter your Email" 
            />
            <input 
                className="inputs"  
                onChange={handleChangeUser} 
                type="password" 
                name='password' 
                value={logUser.password} 
                placeholder= "Enter your password" 
            />
            <input className='btn' type="submit" value="Login" />
            <p>Or </p>
            <input className='btn' type="submit" value="Register" />
        </form>
    </div>)
}

export default Login;