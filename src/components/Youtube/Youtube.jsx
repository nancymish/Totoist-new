import React from "react";
import "./Youtube.css";
import ReactPlayer from "react-player";


const Youtube = () => {
  return (
    <>
      <div className="youtube">
        <ReactPlayer
          url="https://youtu.be/fI-iTYAwL6c?si=K3lyt31-_sK-nC7x"
          className="video"
          style={{
            width: "80%",
            height: "450px",
            borderRadius: "10px",
            overflow: "hidden",
          }}
          width="75%"
          height="80%"
        />
      </div>

      <div className="middleware">
        <div className="paragraph">
          <h2>Kickstart your next project with Todoist Templates</h2>
          <p>
            No need to create projects or setups from scratch when we have<br></br> 50+
            templates made for you.
          </p>
        </div>
        <div className="choice">
          <ul>
            <li>Work</li>
            <li>Personal</li>
            <li>Education</li>
            <li>Management</li>
            <li>Marketing & Sales</li>
            <li>Customer support</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Youtube;
