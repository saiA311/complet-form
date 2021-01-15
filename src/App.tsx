import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Header from "./Header";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile">
            <Header path="/" direction="Logout" />
            <Profile />
          </Route>
          <Route path="/register">
            <Header path="/" direction="For Login" />
            <Register />
          </Route>
          <Route path="/">
            <Header path="/register" direction="For Registeration" />
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
