import axios from "axios";

const API_URL = `${process.env.REACT_APP_BACKEND_URL}api/`;

const getDefaultBackground = async () => {
  const result = await axios.get(API_URL + "get_default");
  return result;
};

export { getDefaultBackground };
