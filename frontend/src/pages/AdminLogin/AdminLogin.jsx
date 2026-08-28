import "./AdminLogin.css";

import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AdminLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://campus-lost-and-found-backend-mo3s.onrender.com/api/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.success) {
  localStorage.setItem("adminLoggedIn", "true");
  localStorage.setItem("adminToken", data.token);

  navigate("/admin-dashboard");
} else {
      alert(data.message);
    }
  } catch (error) {
    console.error(error);
    alert("Unable to connect to server.");
  }
};
  return (
    <div className="admin-login-page">

      <div className="login-card">

        <ShieldCheck size={55} className="login-icon" />

        <h1>Admin Login</h1>

        <p>
          Sign in to manage found items and verify claims.
        </p>

        <form onSubmit={handleLogin}>

          <input
  type="text"
  placeholder="Username"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>

          <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <button type="submit">
            Login
          </button>

        </form>

        <Link to="/">
          ← Back to Home
        </Link>

      </div>

    </div>
  );
}

export default AdminLogin;