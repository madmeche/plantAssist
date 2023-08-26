import React, { useEffect } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
// import Register from "./Register";

const Logout = () => {


  let navigate = useNavigate();

  useEffect(() => {
    const logout = setTimeout(() => {
        console.log("Logging out")
        sessionStorage.clear()
        navigate('/')
    }, 500)

    return () => {
        clearTimeout(logout)
    }
  }, [navigate])

  return (
    <>
      <div className="container">
        <form>
          <div className="auth-form-container">
            <div className="header">
              <h2>Login</h2>
            </div>
            <div color='black'>Log out</div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Logout;
