import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./component/pages/Home";
import Login from "./component/pages/Login";
import Register from "./component/pages/Register";
import PlantList from "./component/pages/PlantList";
import Zone from './component/Zone'
import Favorites from "./component/pages/Favorites";


function App() {
  // const [currentForm, setCurrentForm] = useState('login')

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/plant/")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json)
  //       setData(json.data);
  //     });
  // }, []);

  return (
    <>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/plants" element={<PlantList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path='/plants' element={<PlantList />} />
          <Route path='/zone' element={<Zone />} />
          <Route path='/favorites' element={<Favorites/>} />
        </Routes>
   
    </>
  );
}

export default App;
