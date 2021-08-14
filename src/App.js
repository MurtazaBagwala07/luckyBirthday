import React, { useState } from "react";
import "./styles.css";
import happy from "/src/happy.png";
import cryingboy from "/src/cryingboy.svg";

var date = "";
var luckyNumber = 0;
const happyImgDiv = (
  <img alt="happyImage" src={happy} width="100%" height="200px" />
);
const unhappyImgDiv = (
  <img alt="unhappyImage" src={cryingboy} width="100%" height="200px" />
);

export default function App() {
  const [displayResult, setDisplayResult] = useState(["", ""]);
  const [displayAlert, setDisplayAlert] = useState("flex");
  function check(e) {
    e.preventDefault();
    const dArray = date.split("-");
    let sum = 0;
    dArray.map((string) => {
      for (let i = 0; i < string.length; i++) {
        sum = sum + Number(string[i]);
      }
    });

    if (sum % Number(luckyNumber) === 0) {
      setDisplayResult(["Hurray!!You are a lucky person!", happyImgDiv]);
    } else {
      setDisplayResult([
        "Oops!!Your birthday is not a lucky number!",
        unhappyImgDiv
      ]);
    }
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="header">
          <h1>Is your birthday lucky?</h1>
          <h1>Lets find out</h1>
          <a href="#main">scroll down</a>
        </div>
        <div className="input" id="main">
          <div id="alertBox" style={{ display: `${displayAlert}` }}>
            <div className="notice">
              <strong>Privacy Notice!</strong> We are not storing your data.
            </div>

            <div
              onClick={() => {
                setDisplayAlert("none");
              }}
              style={{
                paddingLeft: "1rem",
                cursor: "pointer",
                fontSize: "0.5rem"
              }}
            >
              <span role="img" aria-labelledby="crossIcon">
                &#10060;
              </span>
            </div>
          </div>
          <form onSubmit={check}>
            <label htmlFor="bd" className="label">
              Select Your Birthday
            </label>
            <input
              id="bD"
              onChange={(e) => {
                date = e.target.value;
              }}
              type="date"
              required
            />
            <label htmlFor="ln" className="label">
              Select Your Lucky Number
            </label>
            <input
              id="luckyNumber"
              type="number"
              min="1"
              onChange={(e) => {
                luckyNumber = e.target.value;
              }}
              required
            />
            <button type="submit">check</button>

            <div className="output">
              <div className="label">{displayResult[0]}</div>
              {displayResult[1]}
            </div>
          </form>
        </div>

        <div className="footer">
          <ul className="list">
            <li className="ft">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/murtaza-bagwala-2850341bb"
              >
                Linked in
              </a>
            </li>
            <li className="ft">
              <a target="_blank" href="https://twitter.com">
                Twitter
              </a>
            </li>
            <li className="ft">
              <a target="_blank" href="https://github.com/MurtazaBagwala07/">
                Github
              </a>
            </li>
            <li className="ft">
              <a target="_blank" href="https://portofolio-murtaza.netlify.app/">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
