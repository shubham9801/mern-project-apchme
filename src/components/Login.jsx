// Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.username === username &&
      storedUser.password === password
    ) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Login Successful!");
      navigate("/");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <input type="text"
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password"
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
