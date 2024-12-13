import React from 'react'
import './Navbar.css'
import logo from '../../assects/logo.png'
import { FiChevronDown} from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
          <img src={logo} alt=''/>
        </div>
        <div className="menubar">
          <ul>
            <li>Features</li>
            <li>For Teams</li>
            <li>Resources< FiChevronDown className='down'/>
            <div className="dropdown">
              <ul>
                <li>Integrations</li>
                <li>Templates</li>
                <li>Getting Started</li>
                <li>Help Center</li>
                <li>Productivity Methods + Quiz</li>
                <li>Inspiration Hub</li>
                <li> Downloads</li> 
              </ul>
            </div>
            </li>
            <li>Pricing</li>
            <li>Log in</li>  
          </ul>
          <button>Start for Free</button>
          </div>
    </div>
  )
}

export default Navbar