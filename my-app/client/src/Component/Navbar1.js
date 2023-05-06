import React from 'react'
import "./navbar.css"
//import logo from 'src/Components/icon.png';
import logo from "./logo.png"
import { useAuth0 } from "@auth0/auth0-react";

function Header() {
   const {user, loginWithRedirect ,isAuthenticated,logout} = useAuth0();
console.log(user)
  return (
    <header className="header-area header-sticky" style={{ background: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              {/* ***** Logo Start ***** */}
              <a href="#" className="logo pt-4"><img src={logo} width="70" height="70" alt="B-Care"/></a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className="nav">
                <li className="scroll-to-section"><a href="/" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#about">About</a></li>
                <li className="submenu">
                  <a href="javascript:;">Features</a>
                  <ul>
                    <li><a href="consult-doc.html">Consult a Doc</a></li>
                    <li><a href="/analyser">Estimate Cancer</a></li>
                    <li><a href="/PeriodTracker">Track Your Periods</a></li>
                    <li><a href="/SelfCheck">Check Yourself</a></li>
                  </ul>
                </li>
                <li className="scroll-to-section"><a href="/user">User</a></li>
                <li className="scroll-to-section"><a href="/patient">Patient</a></li>
                <li className="scroll-to-section"><a href="/doctor">Doctors</a></li>
                {isAuthenticated && <p>Hello {user.name}</p>}
                {isAuthenticated ?  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>LogOut</button> :
                <button className="pt-1 pr-1 pl-1 pb-1" onClick={() => loginWithRedirect()}>LogIn</button>}
                {/* <li className="scroll-to-section"><a href="/login">Login/Signup</a></li> */}
                <li className="scroll-to-section"><a href="#contact-us">Contact Us</a></li>
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
