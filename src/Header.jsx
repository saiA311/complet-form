import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = ({ path, direction }) => {
  const History = useHistory();
  const [{ jwts, username }, dispatch] = useStateValue();
  const ClickHandler = () => {
    dispatch({
      type: "DELETE_TOKEN",
    });
    History.replace("/");
  };
  if (jwts === "" && username === "") {
    return (
      <div>
        <header className="app_header">
          <Link to={path}>
            <h2>{direction}</h2>
          </Link>
        </header>
      </div>
    );
  } else {
    return (
      <div>
        <header className="app_header2">
          <button onClick={ClickHandler}>
            <h2>{direction}</h2>
          </button>
        </header>
      </div>
    );
  }
};

export default Header;
