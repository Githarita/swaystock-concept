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
  const [selectedState, setSelectedState] = useState("State");
  const [selectedBillState, setSelectedBillState] = useState("State");
  const [selectedLga, setSelectedLga] = useState("Local Government Area");
  const [selectedBillLga, setSelectedBillLga] = useState(
    "Local Government Area"
  );
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

  const availableBillStates = locationData.states.find(
    (state) => state.name === selectedBillState
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
                  <form autoComplete="on" className="omrs-form">
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Full Legal Name"
                    />

                    <input
                      type="text"
                      placeholder="Street Address"
                      autoComplete="street-address"
                    />

                    <input
                      type="text"
                      placeholder="Street Address2 (Optional)"
                      autoComplete="street-address"
                    />

                    <input type="text" placeholder="City" />

                    <div
                      className="wegosplit"
                      onClick={() => {
                        setStateShow(true);
                        setLgaShow(false);
                      }}
                    >
                      <p>{selectedState}</p>

                      <svg
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
                    <div
                      className="wegosplit"
                      onClick={() => {
                        setLgaShow(true);
                        setStateShow(false);
                      }}
                    >
                      <p>{selectedLga}</p>

                      <svg
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

                    <input
                      type="number"
                      placeholder="Postal Code"
                      autoComplete="postal-code"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      autoComplete="tel"
                    />

                    <div className="bicfremove">
                      <div
                        className="bicfremoveitem"
                        onClick={() => {
                          setBillingAddress(true);
                          setPaymentMethod(true);
                          setShippingInformation(true);
                          setShowInfo();
                          setShowaddship(true);
                        }}
                      >
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                          setShippingInformation(true);
                          setShowInfo(false);
                        }}
                      >
                        <p>Save</p>
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}

            {showBillingAddress && (
              <div className="buying-info-container-formitem">
                <div>
                  <h5 className="bicftitle">Billing Information</h5>
                  {showaddbill && (
                    <p
                      className="bicfbtn"
                      onClick={() => {
                        setShowInfo("billaddress");
                        setPaymentMethod(false);
                        setShippingInformation(false);
                        setShowaddbill(false);
                      }}
                    >
                      Add Billing Address
                    </p>
                  )}
                </div>
                {showInfo === "billaddress" && (
                  <form autoComplete="on" className="omrs-form">
                    <input
                      type="text"
                      autoComplete="name"
                      placeholder="Full Legal Name"
                    />

                    <input
                      type="text"
                      placeholder="Street Address"
                      autoComplete="street-address"
                    />

                    <input
                      type="text"
                      placeholder="Street Address2 (Optional)"
                      autoComplete="street-address"
                    />

                    <input type="text" placeholder="City" />

                    <div
                      className="wegosplit"
                      onClick={() => {
                        setStateShow(true);
                        setLgaShow(false);
                      }}
                    >
                      <p>{selectedBillState}</p>

                      <svg
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
                    <div
                      className="wegosplit"
                      onClick={() => {
                        setLgaShow(true);
                        setStateShow(false);
                      }}
                    >
                      <p>{selectedBillLga}</p>

                      <svg
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

                    <input
                      type="number"
                      placeholder="Postal Code"
                      autoComplete="postal-code"
                    />

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      autoComplete="tel"
                    />

                    <div className="bicfremove">
                      <div
                        className="bicfremoveitem"
                        onClick={() => {
                          setBillingAddress(true);
                          setPaymentMethod(true);
                          setShippingInformation(true);
                          setShowInfo();
                          setShowaddship(true);
                          setShowaddbill(true);
                        }}
                      >
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                          setShippingInformation(true);
                          setShowInfo(false);
                          setShowaddbill(true);
                        }}
                      >
                        <p>Save</p>
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}

            {showPaymentMethod && (
              <div className="buying-info-container-formitem ">
                <div>
                  <h5 className="bicftitle">Payment Method</h5>
                  {showaddpayment && (
                    <p
                      className="bicfbtn"
                      onClick={() => {
                        setShowInfo("paymentmethod");
                        setPaymentMethod(true);
                        setShippingInformation(false);
                        setBillingAddress(false);
                        setShowaddpayment(false);
                      }}
                    >
                      Add Payment Method
                    </p>
                  )}
                </div>
                {showInfo === "paymentmethod" && (
                  <form autoComplete="on" className="omrs-form">
                    <div className="buying-info-payment1">
                      <p className="theselecta">Select Payment Method</p>
                      <div className="thecredeb">
                        <p>Credit/Debit</p>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="bicfremove">
                      <div
                        className="bicfremoveitem"
                        onClick={() => {
                          setBillingAddress(true);
                          setPaymentMethod(true);
                          setShippingInformation(true);
                          setShowInfo();
                          setShowaddship(true);
                          setShowaddbill(true);
                          setShowaddpayment(true);
                        }}
                      >
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
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
                          setShippingInformation(true);
                          setShowInfo(false);
                          setShowaddbill(true);
                          setShowaddpayment(true);
                        }}
                      >
                        <p>Save</p>
                        <svg
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                            fillRule="evenodd"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}
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
            {availableBillStates?.lga.map((lg, key) => {
              return (
                <p
                  className="state-province-text"
                  key={key}
                  onClick={() => {
                    setSelectedLga(lg.name);
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
                    setSelectedBillState(state.name);
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
            {availableBillStates?.lga.map((lg, key) => {
              return (
                <p
                  className="state-province-text"
                  key={key}
                  onClick={() => {
                    setSelectedBillLga(lg.name);
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
