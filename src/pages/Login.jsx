import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (isSignUp) {
      // SIGN UP
      const userExists = users.find(u => u.email === form.email);

      if (userExists) {
        alert("User already exists");
        return;
      }

      users.push(form);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("currentUser", JSON.stringify(form));
      alert("Sign up successful!");
      navigate("/account");

    } else {
      // LOGIN
      const validUser = users.find(
        u => u.email === form.email && u.password === form.password
      );

      if (!validUser) {
        alert("Invalid credentials");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(validUser));
      alert("Login successful!");
      navigate("/account");
    }
  };

  return (
    <div>
      <h2>{isSignUp ? "Sign Up" : "Sign In"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <p onClick={() => setIsSignUp(!isSignUp)} style={{ cursor: "pointer" }}>
        {isSignUp
          ? "Already have an account? Sign In"
          : "Don't have an account? Sign Up"}
      </p>
    </div>
  );
}

export default Login;