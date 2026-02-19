// Signup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful!");
    navigate("/login");
  };

  return (
    <>
      <h2>Signup</h2>
      <input type="text" placeholder="Username"
        onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password"
        onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </>
  );
}

export default Signup;
