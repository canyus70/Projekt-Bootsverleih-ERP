import { useState } from "react";
import { Link } from "react-router-dom";
import { silentRefreshLoop } from "../utils/tokens";


const Login = ({onLoginSuccess}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const loginUser = (event) => {
      event.preventDefault();
      if (!email || !password) {
        setErrorMessage("email and password must be defined");
        return;
      }

      fetch("http://localhost:5555/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })
        .then((res) => res.json())
        .then(({ success, result, message }) => {
          if (!success) return setErrorMessage(message || "Login failed");
          // result.tokens.refreshToken
          const authorization = `Bearer ${result.tokens.accessToken}`;
          onLoginSuccess(authorization, result.user); // result sind die profile infos
  
          silentRefreshLoop(
            result.tokens.accessToken,
            result.tokens.refreshToken,
            function onSiletRefreshDoneCallback(newAccessToken) {
              const authorization = `Bearer ${newAccessToken}`;
              onLoginSuccess(authorization, result.user); // update suthorization state
            }
          );
          setErrorMessage(""); // reset error message after success
          setSuccessMessage(
            "Login successful, please go to Dashboard and enjoy!"
          );
        });
    };




    return (  

        <>
        <form className="login-form">
          <h2>Login</h2>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <label htmlFor="password">Passwort</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
  
          <button
            style={{ background: "blue", color: "white" }}
            onClick={loginUser}
          >
            Login
          </button>
        </form>
  
        <p style={{ color: "red" }}>{errorMessage}</p>
        <p style={{ color: "green" }}>{successMessage}</p>
  
        <Link to="/">
          <button style={{ marginTop: 32 + "px" }}>Zum Dashboard</button>
        </Link>
  
        <Link to="/register">
          <button style={{ marginTop: 32 + "px" }}>Create and Account</button>
        </Link>
      </>


    );
}
 
export default Login;