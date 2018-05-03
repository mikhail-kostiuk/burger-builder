import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-kmv.firebaseio.com/"
});

export default instance;
