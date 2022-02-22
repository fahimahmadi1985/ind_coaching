import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LeftSideBar.css";
import makeCall from "../../api/Call";
import env from "../../api/env";
export default function LeftSideBarLinks() {
  const navigate = useNavigate();
  const [viewOptions, setViewOptions] = useState([]);
  // const [viewOptions2, setViewOptions2] = useState([]);
  // const [randomEvents, setRandomEvents] = useState([]);
  function viewRooms() {
    navigate("/room");
  }
  function viewProjects() {
    navigate("/projects");
  }
  function viewEvents() {
    navigate("/events");
  }
  useEffect(() => {
    makeCall(env.EVENTS, env.PROJECTS)
    .then((result) => {
      setViewOptions(result.Options);
      console.log(result, "test_Leftside");
    });
  }, []);

return (
    <div className="lf_container">
      <div className="optionLinks">
        <h4>Popular Rooms</h4>
        <ul>
        </ul>
        <button onClick={viewRooms} className="viewMore_btn">
          View more Rooms
        </button>
      </div>
      <div className="optionLinks">
        <h4>Popular Projects</h4>
        <ul>
        {viewOptions.slice(0, 3).map((test, index) => (
            <li key={index}>
              <a href={`/${test.title}`}>{test.title}</a>
            </li>
          ))}
        </ul>
        <button onClick={viewProjects} className="viewMore_btn">
          View more Projects
        </button>
      </div>
      <div className="optionLinks">
        <h4>Popular Events</h4>
        <ul>
          {viewOptions.slice(0, 3).map((test, index) => (
            <li key={index}>
              <a href={`/${test.title}`}>{test.title}</a>
            </li>
          ))}
          {/* {randomEvents && randomEvents.map((rand) => rand.title)} */}
        </ul>
        <button onClick={viewEvents} className="viewMore_btn">
          View more Events
        </button>
      </div>
    </div>
  );
}