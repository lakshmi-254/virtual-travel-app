import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = () => {

    if (!email || !password) {

      alert("Enter email and password");

      return;

    }

    const user = {

      name: email.split("@")[0],

      email: email

    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("Login successful");

    navigate("/account");

  };

  return (

    <div className="container">

      <h2>Login</h2>

      <input
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <br />

      <button onClick={login}>
        Login
      </button>

    </div>

  );

}

export default Login;
