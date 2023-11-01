import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav__div">
      <nav className="nav">
        <h1>Crypt hunter</h1>
         <div className="select">
              <select>
                   <option>USD</option>
                   <option>NGN</option>
             </select>
             <div className="links">LOGIN</div>
         </div>
      </nav>
    </div>
  );
};

export default Nav;
