import React from "react";
import { useState, useEffect, useContext } from "react";
import PlantCard from "./PlantCard";
import { Link } from "react-router-dom";
import "../styles/homeStyle.css";
// Go to setting to access profile page.

function Home() {
  // const plantContext = useContext(PlantDataContext);

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
    { value: "full sun", label: "Full Sun" },
    { value: "1-3 Hours", label: "1-3 Hours" },
    { value: "3-6 Hours", label: "3-6 Hours" },
    { value: "6-9 Hours", label: "6-9 Hours" },
    { value: "9-12 Hours", label: "9-12 Hours" },
    { value: null, label: "Any" },
    ,
  ];

  const options2 = [
    { value: "" },
    { value: "annuals", label: "Annuals" },
    { value: "perennials", label: "Perennials" },
    { value: "shrubs", label: "Shrubs" },
    { value: "trees", label: "Trees" },
    { value: "vines", label: "Vines" },
    { value: "succulent", label: "Succulent" },
    { value: "indoor", label: "Indoor" },
    { value: null, label: "Any" },
    ,
  ];

  const options3 = [
    { value: "" },
    { value: "spring", label: "Spring" },
    { value: "summer", label: "Summer" },
    { value: "fall", label: "Fall" },
    { value: "winter", label: "Winter" },
    { value: null, label: "Any" },
  ];

  const [data, setData] = useState([]);
  const [plants, setPlants] = useState([]); //movies, setMovies

  // const [zone, setZone] = useState("");
  const [sunExposure, setSunExposure] = useState(""); //filter1
  // const [categories, setCategories] = useState("");
  // const [season, setSeason] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/plant/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setPlants(json.data);
  //     });
  //   setPlants(plants);
  // }, []);

  const handleFilterbySunExposure = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setPlants(e.target.value);
  };

  const handleFilter = () => {
    const filteredPlants = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/plants/");
        const data = await response.json();
        setPlants(data.data);
      } catch (error) {
        console.error("Error:", error);
      }
      const filter = {
        bySunExposure: true,
      };

      //adjust filter keys based on if they're selected, an empty string means it's not selected AKA false in JS
      if (plants) {
        filter.bySunExposure = plants.sunExposure
          .toLowerCase()
          .includes(plants); //this sets a boolean
      }

      //return a boolean of the following expression
      return filter.bySunExposure;
    };

    setPlants(filteredPlants);
    console.log(plants);
  };

  const handleResetPlantList = () => {
    let resetplants = plants;
    resetplantsPlants(resetplants);
  };

  return (
    <>
      <div className="list">
        <div className="upper-container">
          <div className="list-container">
            <p>
              <strong>Zone: {selectedOption0}</strong>
            </p>
            <div className="list-containter-tog">
              <select
                className="list-container-opt"
                value={plants} 
                onChange={(e) => handleFilterbySunExposure(e)}
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
                value={plants}
                onChange={(e) => handleFilterbySunExposure(e)}
              >
                {options1.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                  ))}
              </select>

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
        </div>

        <div className="upper-container">
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
          </div>
        </div>
      </div>
      <div className="btn-container">
        <div>
          {/* {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))} */}
        </div>
        {/* // add onclick */}
        <button className="list-button" onClick={handleFilter}>
          Search
        </button>
        <button className="list-button" onClick={handleResetPlantList}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Home;
