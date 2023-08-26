import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      username,
      password,
    };
    console.log(data);

    fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("response: ", json.success);
      });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="auth-form-container">
            <div className="header">
              <h2>Register</h2>
            </div>
            <div className="pass">
              <label htmlFor="firstName">First Name</label>
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="firstName"
                placeholder="First Name"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="pass">
              <label htmlFor="lastName">Last Name</label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="lastName"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
              />
            </div>
            <div className="pass">
              <label htmlFor="email">email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="you@email.com"
                id="email"
                name="email"
              />
            </div>
            <div className="pass">
              <label htmlFor="username">username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="username"
                placeholder="username"
                id="username"
                name="username"
              />
            </div>

            <div className="pass">
              <label htmlFor="password">password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="********"
                id="password"
                name="password"
              />
              <div className="btn-login">
                <button>
                  <b>Sign Up</b>
                </button>
              </div>
            </div>
          </div>

          <div className="auth-form-link">
            <Link to="/login">
              <button>
                Already have an account?<b> Log In</b>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
