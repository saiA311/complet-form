import axios from "axios";

const instance = axios.create({
  baseURL: "https://form-new.herokuapp.com/",
});

export default instance;
