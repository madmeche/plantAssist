import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/homeStyle.css";
// Go to setting to access profile page.

function Home() {
  const [selectedOption0, setSelectedOption0] = useState("");
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  const options0 = [
    { value: "" },
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
  ];

  const options1 = [
    { value: "" },
    { value: "Full Sun", label: "Full Sun" },
    { value: "1-3 Hours", label: "1-3 Hours" },
    { value: "3-6 Hours", label: "3-6 Hours" },
    { value: "6-9 Hours", label: "6-9 Hours" },
    { value: "9-12 Hours", label: "9-12 Hours" },
    { value: null, label: "Any" },
    ,
  ];

  const options2 = [
    { value: "" },
    { value: "Annuals", label: "Annuals" },
    { value: "Perennials", label: "Perennials" },
    { value: "Shrubs", label: "Shrubs" },
    { value: "Trees", label: "Trees" },
    { value: "Vines", label: "Vines" },
    { value: "Succulent", label: "Succulent" },
    { value: "Indoor", label: "Indoor" },
    { value: null, label: "Any" },
    ,
  ];

  const options3 = [
    { value: "" },
    { value: "Spring", label: "Spring" },
    { value: "Summer", label: "Summer" },
    { value: "Fall", label: "Fall" },
    { value: "Winter", label: "Winter" },
    { value: null, label: "Any" },
  ];

  return (
    <>
      <div className="list">
      <div className="list-container">
          <p>
            <strong>Zone: {selectedOption0}</strong>
          </p>
          <div className="list-containter-tog">
            <select
              className="list-container-opt"
              value={selectedOption0}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              {options0.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="list-container">
          <p>
            <strong>Sun Exposure: {selectedOption1}</strong>
          </p>
          <div className="list-containter-tog">
            <select
              className="list-container-opt"
              value={selectedOption1}
              onChange={(e) => setSelectedOption1(e.target.value)}
            >
              {options1.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="list-container">
          <p>
            <strong>Categories: {selectedOption2}</strong>
          </p>
          <div className="list-containter-tog">
            <select
              className="list-container-opt"
              value={selectedOption2}
              onChange={(e) => setSelectedOption2(e.target.value)}
            >
              {options2.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="list-container">
          <p>
            <strong>Season: {selectedOption3}</strong>
          </p>
          <div className="list-containter-tog">
            <select
              className="list-container-opt"
              value={selectedOption3}
              onChange={(e) => setSelectedOption3(e.target.value)}
            >
              {options3.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="btn-container">
            <button className="list-button">Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
