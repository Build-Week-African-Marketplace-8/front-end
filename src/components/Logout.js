import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosWithAuth from "./../utils/axiosWithAuth";

const Logout = () => {
  const { push } = useNavigate();

  useEffect(() => {
    axiosWithAuth()
      .post("/logout")
      .then((resp) => {
        localStorage.removeItem("token");
        push("/login");
      });
  }, [push]);

  return <div></div>;
};

export default Logout;
