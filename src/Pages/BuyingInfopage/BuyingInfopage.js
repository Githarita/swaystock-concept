import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { locationData } from "../../Utils/datas";
import "./BuyingInfopage.css";

function BuyingInfopage() {
  const navigate = useNavigate();
  const [active, setActive] = useState("addbtn");
  const [stateShow, setStateShow] = useState(false);
  const [lgaShow, setLgaShow] = useState(false);
  const [selectedState, setSelectedState] = useState();
  const [displayam, setDisplayam] = useState("");
  const [displayamlga, setDisplayamlga] = useState("");
  const [selectedLga, setSelectedLga] = useState();
  const [showInfo, setShowInfo] = useState("");
  const [showaddship, setShowaddship] = useState(true);
  const [showaddbill, setShowaddbill] = useState(true);
  const [showaddpayment, setShowaddpayment] = useState(true);

  const [showShippingInformation, setShippingInformation] = useState(true);
  const [showBillingAddress, setBillingAddress] = useState(true);
  const [showPaymentMethod, setPaymentMethod] = useState(true);

  const availableStates = locationData.states.find(
    (state) => state.name === selectedState
  );

  // const availableLgas = availableStates?.lga?.find(
  //   (l) => l.name === selectedLga
  // );
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

        <p className="settings-top-text">Buying Information</p>
      </header>

      <div className="buying-info-container">
        {active === "addbtn" && (
          <div className="buying-info-container-btn">
            <p className="buying-info-container-btn-text">
              "Oops! you don't have a buying information yet!"
            </p>
            <button
              className="buying-info-container-btn-btn"
              onClick={() => setActive("showform")}
            >
              Add Buying Information
            </button>
          </div>
        )}

        {active === "showform" && (
          <div className="buying-info-container-form">
            {showShippingInformation && (
              <div className="buying-info-container-formitem">
                <div>
                  <h5 className="bicftitle">Shipping Information</h5>
                  {showaddship && (
                    <p
                      className="bicfbtn"
                      onClick={() => {
                        setShowInfo("shipinfo");
                        setShowaddship(false);
                        setBillingAddress(false);
                        setPaymentMethod(false);
                      }}
                    >
                      Add Shipping Information
                    </p>
                  )}
                </div>

                {showInfo === "shipinfo" && (
                  <div className="omrs-form">
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="text" />
                        <span className="omrs-input-label">
                          Full Legal Name
                        </span>
                      </label>
                    </div>
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="text" />
                        <span className="omrs-input-label">Street Address</span>
                      </label>
                    </div>
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="text" />
                        <span className="omrs-input-label">
                          Street Address2 (Optional)
                        </span>
                      </label>
                    </div>
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="text" />
                        <span className="omrs-input-label">City</span>
                      </label>
                    </div>
                    <div className="omrs-input-group">
                      <div
                        className="omrs-input-underlined"
                        onClick={() => {
                          setStateShow(true);
                          setLgaShow(false);
                        }}
                      >
                        <div className="omrsselect">{selectedState} </div>

                        <div className="omrs-input-label wegosplit">
                          <span style={{ display: `${displayam}` }}>
                            State / Province
                          </span>

                          <svg
                            style={{ display: `${displayam}` }}
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="omrs-input-group">
                      <div
                        className="omrs-input-underlined"
                        onClick={() => {
                          setLgaShow(true);
                          setStateShow(false);
                        }}
                      >
                        <div className="omrsselect">{selectedLga}</div>

                        <div className="omrs-input-label wegosplit">
                          <span style={{ display: `${displayamlga}` }}>
                            LGA
                          </span>

                          <svg
                            style={{ display: `${displayamlga}` }}
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="number" />
                        <span className="omrs-input-label">Postal Code</span>
                      </label>
                    </div>
                    <div className="omrs-input-group">
                      <label className="omrs-input-underlined">
                        <input type="tel" />
                        <span className="omrs-input-label">Phone Number</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
            )}

            {showBillingAddress && (
              <div className="buying-info-container-formitem">
                <h5 className="bicftitle">Billing Information</h5>
                <p className="bicfbtn">Add Billing Address</p>
              </div>
            )}

            {showPaymentMethod && (
              <div className="buying-info-container-formitem ">
                <h5 className="bicftitle">Payment</h5>
                <p className="bicfbtn">Add Payment Method</p>
              </div>
            )}

            <div className="bicfremove">
              <div
                className="bicfremoveitem"
                onClick={() => setActive("addbtn")}
              >
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <p>Discard</p>
              </div>

              <div
                className="bicfremoveitem"
                onClick={() => {
                  setShowaddship(true);
                  setBillingAddress(true);
                  setPaymentMethod(true);
                  setShowInfo(false);
                }}
              >
                <p>Save</p>
                <svg viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {stateShow && (
        <div className="state-province">
          <p className="state-province-title">Select State / Province</p>
          <div className="state-prov">
            {locationData.states.map((state, key) => {
              return (
                <p
                  className="state-province-text"
                  key={key}
                  onClick={() => {
                    setSelectedState(state.name);
                    setDisplayam("none");
                    setStateShow(false);
                  }}
                >
                  {state.name}
                </p>
              );
            })}
          </div>
        </div>
      )}
      {lgaShow && (
        <div className="state-province">
          <p className="state-province-title">Select Local Government Area</p>
          <div className="state-prov">
            {availableStates?.lga.map((lg, key) => {
              return (
                <p
                  className="state-province-text"
                  key={key}
                  onClick={() => {
                    setSelectedLga(lg.name);
                    setDisplayamlga("none");
                    setLgaShow(false);
                    setStateShow(false);
                  }}
                >
                  {lg.name}
                </p>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default BuyingInfopage;
