import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: "https://african-marketplacedb.herokuapp.com/",
  });
};

export default axiosWithAuth;
