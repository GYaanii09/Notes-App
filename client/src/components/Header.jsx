import React from "react";
import Login from "./Login";
import {Link} from 'react-router-dom';
function Header() {
  const css =  {
    zIndex : "2",
    textAlign : "center",
    width: "30px",
    margin: "0px",
  }
  return (
    <header>
      <h1>Notes</h1>
      <Link className='btn HeadLogReg' style={css} to="/login"> Login</Link>
      <Link className='btn HeadLogReg' style={css} to="/register"> Register</Link>
    </header>
  );
}

export default Header;
