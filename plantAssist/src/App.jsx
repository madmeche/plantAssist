import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import AboutUs from "./component/pages/AboutUs";
import HardyZone from "./component/Zone";
import { PlantDataContext } from "./PlantDataContext";
import PrivateRoute from "./component/utils/PrivateRoute";

// import PlantList from "./component/Plant";
// import Profile from "./component/pages/Profile"

function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/plant/")
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        setData(json.data);
      });
  }, []);

  return (
    <>
 
      <PlantDataContext.Provider value={data}>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/zone" element= {
          <PrivateRoute>
            {<HardyZone />}
          </PrivateRoute>
          }
           />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          {/* <Route path='/plant' element={<PlantList/>} /> */}
          {/* <Route path ='/' element = {<Profile/>} /> */}
        </Routes>
      </PlantDataContext.Provider>
    </>
  );
}

export default App;
