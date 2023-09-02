import React from "react";
import { useState, useEffect, useContext } from "react";
import PlantCard from "./PlantCard";
import PlantList from "./PlantList";
import { Link } from "react-router-dom";
import '../styles/Plant.css'
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
    { value: "1-3", label: "1-3 Hours" },
    { value: "3-6", label: "3-6 Hours" },
    { value: "6-9", label: "6-9 Hours" },
    { value: "9-12", label: "9-12 Hours" },
    { value: null, label: "Any" },
    ,
  ];

  const options2 = [
    { value: "" },
    { value: "annual", label: "Annuals" },
    { value: "perennial", label: "Perennials" },
    { value: "shrub", label: "Shrubs" },
    { value: "tree", label: "Trees" },
    { value: "vine", label: "Vines" },
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

  const [zone, setZone] = useState("");
  const [sunExp, setSunExp] = useState(""); //filter1
  const [type, setType] = useState("");
  const [season, setSeason] = useState("");

  const handleFilterByZone = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setZone(e.target.value);
  }

  const handleFilterbySunExposure = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setSunExp(e.target.value);
  };

  const handleFilterByType = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setType(e.target.value);
  }

  const handleFilterBySeason = (e) => {
    e.preventDefault();

    console.log(e.target.value);
    setSeason(e.target.value);
  }


  const handleFilter = () => {
    const filteredPlants = plants.filter((plant) => {

      const allFilter = {
        byZone: true,
        bySunExposure: true,
        byType: true,
        bySeason: true,
      }; 
      
      if(zone) {
        allFilter.byZone = plant.zone.includes(zone);

      if(sunExp) {
        allFilter.bySunExposure = plant.sunExposure.includes(sunExp); //everything is in lower case in the value, so don't need the lower case funtion or split
      }

      if(type) {
        allFilter.byType = plant.type.includes(type);
      }

      if(season) {
        allFilter.bySeason = plant.season.includes(season);
      }
        
      }
        return allFilter.bySunExposure && allFilter.bySeason && allFilter.byType && allFilter.bySeason;
        // return 
      });

      setPlants(filteredPlants);
      console.log(zone, sunExp, type, filteredPlants); //(zone, sunExp, type, season)
    };


  const handleResetPlantList = () => {
    setPlants(plants);
  };


  useEffect(() => {
    fetch("http://localhost:8080/api/plant/")
      .then((response) => response.json())
      .then((json) => {
        setPlants(json.data);
      });
    setPlants(plants);
  }, []);

  return (
    <>
      <div className="list">
        <div className="upper-container">
          <div className="list-container">
            <div className="filter-title">
              <strong>Zone: {selectedOption0}</strong>
            </div>
            <div className="list-containter-tog">
              
            <select
            className="list-container-opt"
                value={zone}
                onChange={(e) => handleFilterByZone(e)}
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
            <div className="filter-title">
              <strong>Sun Exposure: {selectedOption1}</strong>
            </div>
            <div className="list-containter-tog">
              <select
              className="list-container-opt"
                value={sunExp}
                onChange={(e) => handleFilterbySunExposure(e)}
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
            <div className="filter-title">
              <strong>Type {selectedOption2}</strong>
            </div>
            <div className="list-containter-tog">
            <select 
            className="list-container-opt"
                value={type}
                onChange={(e) => handleFilterByType(e)}
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
            <div className="filter-title">
              <strong>Season: {selectedOption3}</strong>
            </div>
            <div className="list-containter-tog">
              <select
                className="list-container-opt"
                value={season}
                onChange={(e) => handleFilterBySeason(e)}
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
        
        {/* // add onclick */}
        <button className="list-button" onClick={handleFilter}>
          Search
        </button>
        <button className="list-button" onClick={handleResetPlantList}>
          Reset
        </button>
      </div>
      <div className="card-list-container">
      <div className="list-title">Plant List</div>
      <div className="list-body">
        <div className="list-list">
          {plants.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
        </div>
    </>
  );
}

export default Home;
