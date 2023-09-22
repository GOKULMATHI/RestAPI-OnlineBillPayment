import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./style.css";
import "./loginsignup.css";
import { Link } from 'react-router-dom';
const Main = () => {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <div class="b">
    
    <header>
      
			{/* <h3>PAY ONLINE </h3> */}
			<nav ref={navRef}>
				<a href="/#">HOME</a>
        <Link to="About"><a href="/#">ABOUT</a></Link>
        <Link to="Help"><a href="/#">HELP</a></Link>
        <Link to="Contact"><a href="/#">CONTACT</a></Link>
        {/* <Link to="Payment"><a href="/#">PAYMENT</a></Link> */}
        <Link to="/mobile"><a href="/#">RECHARGE</a></Link>
        <Link to="/dth"><a href="/#">DTH BILL</a></Link>
        <Link to="/electricity"><a href="/#">ELECTRICITY BILL</a></Link>
        
        
        {/* <div className='Boys'> */}
        <Link to="SignUp"><a href="/#">SIGNUP</a></Link>
        <Link to="Login"><a href="/#">LOGIN</a></Link>
        {/* </div> */}
				{/* <button
					className="nav1"
					onClick={showNavbar}>
					<FaTimes />
				</button> */}
			</nav>
			<button
				className="nav2"
				onClick={showNavbar}>
				<FaBars />
			</button>
	</header>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <div className='ma'>
    <div  className='ktt'>
    <Link to='/Payment'>
    <button class='button1'>Bill Payment </button></Link>
  </div>
  </div>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		

	<div class="footer">
      <div class="heading">
        <h2>BIO<sup></sup></h2>
      </div>
      <div class="content">
        <div class="services">
          <h4>Services</h4>
          <p><a href="#">App development</a></p>
          <p><a href="#">Web development</a></p>
          <p><a href="#">DevOps</a></p>
          <p><a href="#">Web designing</a></p>
        </div>
        <div class="social-media">
          <h4>Social</h4>
          <p>
            <a href="https://www.linkedin.com/onlinebillpayment"
              ><i class="fab fa-linkedin"></i> Linkedin</a
            >
          </p>
          <p>
            <a href="https://www.twitter.com"
              ><i class="fab fa-twitter"></i> Twitter</a
            >
          </p>
          <p>
            <a href="https://github.com"
              ><i class="fab fa-github"></i> Github</a
            >
          </p>
          <p>
            <a href="https://www.facebook.com"
              ><i class="fab fa-facebook"></i> Facebook</a
            >
          </p>
          <p>
            <a href="https://www.instagram.com"
              ><i class="fab fa-instagram"></i> Instagram</a
            >
          </p>
        </div>
        <div class="links">
          <h4>Quick links</h4>
          <p><a href="#">Home</a></p>
          <p><a href="/About">About</a></p>
          <p><a href="/Help">Help</a></p>
          <p><a href="/Contact">Contact</a></p>
        </div>
        <div class="details">
          <h4 class="address">Address</h4>
          <p>
            10th,vivekanadhar street ,Main Road  <br />
            Town hall, kento.
          </p>
          <h4 class="mobile">Mobile</h4>
          <p><a href="#">+91-8870754365<br></br>
          +91-0486534566</a></p>
          <h4 class="mail">Email</h4>
          <p><a href="#">onlinebillpayment@gmail.com</a></p>
        </div>
        <footer>
        <hr />
        © 2022 Online Bill Payment.
        </footer>
        </div>
        </div>
	
    </div>
  );
};

export default Main;