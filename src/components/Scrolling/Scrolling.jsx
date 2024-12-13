import React from "react";
import "./Scrolling.css";
const Scrolling = () => {
  return (
    <div className="main-div">
      <div className="left-div">
        <div className="first">
          <h4 className="heading1">Clear your mind</h4>
          <h1>Capture tasks at the speed of thought</h1>
          <p>
            We’ve spent over a decade refining Todoist to be an extension of
            your mind. Capture and organize tasks instantly using easy-flowing,
            natural language.
          </p>
        </div>

        <div className="first">
          <h4  className="heading2">Focus on what’s important</h4>
          <h1>Stay organized and focused</h1>
          <p>
            Achieve mental clarity by sorting tasks into Today, Upcoming, or
            using custom filters. See only what you need, when you need it.
          </p>
        </div>

        <div className="first">
          <h4  className="heading3">Plan with confidence</h4>
          <h1>Simplify your planning</h1>
          <p>
            Make the most of your time. Schedule due dates, visualize your week
            in calendar view, and set recurring tasks with ease.
          </p>
        </div>

        <div className="first">
          <h4  className="heading4">Organize your teamwork, too</h4>
          <h1>A home for your team’s tasks</h1>
          <p>
            Give your team a shared space to collaborate and stay on top of it
            all – alongside but separate from your personal tasks and projects.
          </p>
          <a href="#" className="linkk">Learn more about teams </a>
        </div>
      </div>
     
    </div>
  );
};

export default Scrolling;
