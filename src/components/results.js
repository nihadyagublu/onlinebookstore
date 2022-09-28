import axios from "axios";
export default axios.create({
  baseURL: "https://bookstoreproject-98caa-default-rtdb.firebaseio.com/",
});
