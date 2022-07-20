import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Login from "./components/Login";
import Register from "./components/Register";
import {BrowserRouter as Router, Routes, Route, Navigate, Link} from 'react-router-dom';
ReactDOM.render((
    
    <Router>
        <Routes>
        <Route path="/" element={<App/>}/>
        <Route path ="/login" element = {<Login />} />
        <Route path ="/register" element = {<Register />} />
        </Routes>
    </Router>
    
 ),
  document.getElementById('root')
);

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.
