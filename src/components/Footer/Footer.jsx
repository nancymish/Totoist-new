import React from "react";
import "./Footer.css";
import logo from '../../assects/logo.png'
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={logo} alt="" className="logo"/>
          <p>
          Join millions of people who organize work and life with Todoist.
          </p>

        </div>

        <div className="footer-main">
        <div className="footer-content-center">
            <h3>Features</h3>
                <ul>
                    
                    <li>How It Works</li>
                    <li>For Teams</li>
                    <li>Pricing</li>
                    <li>Templetes</li>
                </ul>
            
        </div>
        <div className="footer-content-center">
            <h3>Resources</h3>
                <ul>
                    <li>Downloads Apps</li>
                    <li>help Center</li>
                    <li>Productivity</li>
                    <li>Integrations</li>
                    <li>Channel Partners</li>
                    <li>Developer API</li>
                    <li>Status</li>
                </ul>
            
        </div>

        <div className="footer-content-center">
            <h3>Company</h3>
                <ul>
                    <li>About us</li>
                    <li>Careers</li>
                    <li>Inspiration Hub</li>
                    <li>Press</li>
                    <li>Twist</li>
                </ul>
            
        </div>
        </div>
        <div className="footer-content-right">
            <h3>GET IN TOUCH</h3>
            <ul>
                <li>+1-202-456-9909</li>
                <li>Contact298@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © GoodFood.com - All Right Reserved.©</p>
    </div>
  );
};

export default Footer;
