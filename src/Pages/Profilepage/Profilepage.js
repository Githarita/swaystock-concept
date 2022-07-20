import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profilepage.css";

function Profilepage() {
  const navigate = useNavigate();
  return (
    <>
      <header className="settings-top">
        <svg
          className="settings-top-icon"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => navigate(-1)}
        >
          <path
            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
        <p className="settings-top-text">Profile</p>
      </header>

      <div className="buying-info-container">
        <div className="profilepage-cnt">
          <div className="primage">
            <div className="primageimg">
              <img
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
              <div className="primageimgicon">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8536 1.14645C11.6583 0.951184 11.3417 0.951184 11.1465 1.14645L3.71455 8.57836C3.62459 8.66832 3.55263 8.77461 3.50251 8.89155L2.04044 12.303C1.9599 12.491 2.00189 12.709 2.14646 12.8536C2.29103 12.9981 2.50905 13.0401 2.69697 12.9596L6.10847 11.4975C6.2254 11.4474 6.3317 11.3754 6.42166 11.2855L13.8536 3.85355C14.0488 3.65829 14.0488 3.34171 13.8536 3.14645L11.8536 1.14645ZM4.42166 9.28547L11.5 2.20711L12.7929 3.5L5.71455 10.5784L4.21924 11.2192L3.78081 10.7808L4.42166 9.28547Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            

            <div className="primage-item">
              <h2>Emmanuel Adeyemi</h2>
              <p>yemicodes@gmail.com</p>
            </div>
          </div>

          <div className="profilelevel">
            <div className="profilelevel-item">
              <h2>7</h2>
              <p>Bids</p>
            </div>
            <div className="profilelevel-item">
              <h2>9</h2>
              <p>Ask</p>
            </div>
            <div className="profilelevel-item">
              <h2>0</h2>
              <p>Sell</p>
            </div>
            <div className="profilelevel-item">
              <h2>10</h2>
              <p>Following</p>
            </div>
          </div>

          <div className="profilepage-cnt-items">
            <div className="profilegpage-cnt-item">
              <p className="pfpciuser">Username</p>
              <p className="pfpciusername">yemicodes</p>
            </div>
            <div className="profilegpage-cnt-item">
              <p className="pfpciuser">Full Name</p>
              <p className="pfpciusername">Emmanuel Adeyemi</p>
            </div>
            <div className="profilegpage-cnt-item">
              <p className="pfpciuser">Phone</p>
              <p className="pfpciusername">09026863277</p>
            </div>
            <div className="profilegpage-cnt-item">
              <p className="pfpciuser">Password</p>
              <p className="pfpciusername">Change Password</p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Profilepage;
