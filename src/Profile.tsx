import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import jwt from "jsonwebtoken";

const Profile = () => {
  const [{ jwts, username }] = useStateValue();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  useEffect(() => {
    if (jwts !== "") {
      const json = jwt.decode(jwts);
      setName(json.user.name);
      setEmail(json.user.email);
    }
  }, [jwts]);
  if (jwts === "") {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Welcome to web, {username}</h1>
      <br />
      <h2>Email: {email}</h2>
      <br />
      <h2>Name: {name}</h2>
    </div>
  );
};

export default Profile;
