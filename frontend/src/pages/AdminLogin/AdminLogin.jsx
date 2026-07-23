import "./AdminLogin.css";

import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
    const navigate = useNavigate();
  return (
    <div className="admin-login-page">

      <div className="login-card">

        <ShieldCheck size={55} className="login-icon" />

        <h1>Admin Login</h1>

        <p>
          Sign in to manage found items and verify claims.
        </p>

        <form
            onSubmit={(e)=>{
            e.preventDefault();
            navigate("/admin-dashboard");
        }}
>

          <input
            type="email"
            placeholder="Admin Email"
          />

          <input
            type="password"
            placeholder="Password"
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