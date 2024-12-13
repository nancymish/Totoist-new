import React from 'react'
import './Header.css'
import todo1 from '../../assects/todo1.png'
import wave from '../../assects/wave.png'
import the from '../../assects/the.png'
import tech from '../../assects/tech.png'
import pc from '../../assects/pc.png'
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className="left">
            <h1>Organize your work and life, finally.</h1>
            <p>Simplify life for both you and your team with the world’s #1 task manager and to-do list app.</p>
            <p>374K+ ★★★★★ reviews from</p> 
            <button>Start for free</button>
        </div>
        <div className="right">
            <img src={todo1} alt=''></img>
        </div>
    </div>

    <div className="banner">
        <img src={wave} alt="" />
    <div className="middle">
        <div className="first-div">
            <p>“Simple, straightforward, and super powerful”</p>
            <img src={the} alt=''/>
        </div>

        <div className="vertical"></div>

        <div className="second-div">
            <p>“The best to-do list app on the market”</p>
            <img src={pc} alt=''/> 
        </div>
        <div className="vertical"></div>
        <div className="third-div">
            <p>“Nothing short of stellar”</p>
            <img src={tech} alt=''/>
        </div>
    </div>
</div>
 </>
  )
}

export default Header