/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, TextField } from "@material-ui/core";
import "./login.css";
import { useState } from "react";
import Axios from "./Axios.js";
import jwt from "jsonwebtoken";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [{ jwts, username }, dispatch] = useStateValue();
  const History = useHistory();
  const SubmitHandeler = async (e: any) => {
    e.preventDefault();
    try {
      const data = await Axios.post("/login", {
        email: email,
        password: password,
      });
      const json = jwt.decode(data.data);
      dispatch({
        type: "ADD_TOKEN",
        item: {
          jsonwt: data.data,
          username: json.user.username,
        },
      });
      alert("welcome user " + json.user.username);
      History.push("/profile");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="login">
      <div className="login_form-container">
        <form onSubmit={SubmitHandeler}>
          <TextField
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            label="email"
            type="text"
            variant="outlined"
            required
          />
          <TextField
            id="password"
            label="password"
            type="password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Button variant="outlined" onClick={SubmitHandeler} color="primary">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
