import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Sellinginfopage.css"

function Sellinginfopage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("addbtn");
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

        <p className="settings-top-text">Selling Info</p>
      </header>

      <div className="buying-info-container">
        {active === "addbtn" && (
          <div className="buying-info-container-btn">
            <p className="buying-info-container-btn-text">
              "Oops! you don't have a Selling Info yet!"
            </p>
            <button
              className="buying-info-container-btn-btn"
              onClick={() => setActive("showform")}
            >
              Add Selling Information
            </button>
          </div>
        )}

        {active === "showform" && (
          <div className="buying-info-container-form">
            <div className="buying-info-container-formitem">
              <div>
                <h5 className="bicftitle">Selling Information</h5>

                <p
                  className="bicfbtn"
                  onClick={() => {
                    navigate(
                      "/account/settings/selling_info/selling_information"
                    );
                    setActive("addbtn");
                  }}
                >
                  Add Selling Information
                </p>
              </div>
            </div>

            <div className="buying-info-container-formitem">
              <div>
                <h5 className="bicftitle">Payout Information</h5>

                <p
                  className="bicfbtn"
                  onClick={() => {
                    navigate(
                      "/account/settings/selling_info"
                    );
                    setActive("addbtn");
                  }}
                >
                  Get Paid
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default Sellinginfopage