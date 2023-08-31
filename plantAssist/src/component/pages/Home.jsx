import React from "react";
import { useState, useEffect, useContext } from "react";
import { PlantDataContext } from "../../PlantDataContext";
import { Link } from "react-router-dom";
import "../styles/homeStyle.css";
// Go to setting to access profile page.

function Home() {
  const plantContext = useContext(PlantDataContext);

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

  const [data, setData] = useState([]);
  const [plant, setPlant] = useState([]); //movies, setMovies

  // const [zone, setZone] = useState("");
  const [sunExposure, setSunExposure] = useState(""); //filter1
  // const [categories, setCategories] = useState("");
  // const [season, setSeason] = useState("");

  const handleFilterbySunExposure = (e) => {
    //handlefilterchange1
    e.preventDefault();
    console.log(e.target.value);
    setSunExposure(e.target.value);
  };

  const handleFilter = () => {
    const filteredPlants = plant.filter((plant) => {
      const filter = {
        bySunExposure: true,
      };

      if (sunExposure) {
        filter.bySunExposure = plant.sunExposure.includes(sunExposure); //sets as boolean
      }
      //return filter.byName && filter.image;
      return Object.values(filter).every((val) => val === false || !!val); // reference: "upmostly.com"
    });
    setPlant(filteredPlants);
    console.log(sunExposure, filteredPlants);
    console.log("filtered plants:", filteredPlants);
    //     setData([...filteredPlants])

    const clearFilters = () => {
      //reset the movies list to the original
      setPlant(plant);
    };

    useEffect(() => {
      fetch("http://localhost:8080/api/plant/")
        .then((response) => response.json())
        .then((json) => {
          setPlant(json.data);
        });
      setPlant(plant);
    }, []);

    //   let filterSunExposure = plant.filter((sunExposure) => {
    //     let splitplant = plant.name.split(' ')
    //         console.log(splitplant)
    //         //[0] must = name
    //         if ( [0] !== sunExposure )
    //         return plant
    //   });
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
                value={selectedOption0}
                onChange={(e) => setSelectedOption0(e.target.value)}
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
            <div 
            className="list-containter-tog">

              <select value={sunExposure} onChange={(e) => handleFilterbySunExposure(e)}>
                <option value="">-</option>
                <option value="full sun">Full Sun</option>
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
          {plant.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
        {/* // add onclick */}
        <button className="list-button" onClick={handleFilter}>Search</button>
      </div>
    </>
  );
}

export default Home;
