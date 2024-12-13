import React from "react";
import "./LastDiv.css";
import img1 from '../../assects/img1.png'
import img2 from '../../assects/img2.png'
import img3 from '../../assects/img3.png'
import img4 from '../../assects/img4.png'


const LastDiv = () => {
  return (
    <>
      <div className="div1">
        <h4>In it for the long haul</h4>
        <br></br>
        <h1>A task manager you can trust for life</h1>
        <p>
          We’ve been building Todoist for 17 years and 319 days. Rest assured
          that we’ll never sell out to the highest bidder.
        </p>
        <a href="#"> Read about our long term mission</a>
      </div>
      <div className="div2">
        <div className="slide-track">
        <div className="first1"><img src={img1} alt="" /><br></br>
            <h3>30+ Billion <br></br><span>Apps Download</span></h3>
            </div>
            <div className="first1"><img src={img2} alt="" /><br></br>
                <h3>2+ Billion<br></br><span>tasks Complete</span>d</h3>
            </div>
            <div className="first1"><img src={img3} alt="" /><br></br>
                <h3>1+ Billion <br></br><span>Pro Users</span></h3>
            </div>
            <div className="first1"> <img src={img4} alt="" /><br></br>
                <h3>160+ Countries <br></br><span>worldwide</span></h3>
            </div>
       
        </div>
            
      </div>


      <div className="downloads">
        <h1>Gain calmness and clarity with the<br></br> world’s most beloved productivity app</h1>
        <p>374000+ ★★★★★ reviews on Google Play and App Store</p>
        <button>Start for free</button>

        <hr></hr>
      </div>
      
      
      </>
  );
};

export default LastDiv;
