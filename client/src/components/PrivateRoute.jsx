import React from "react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  console.log("tooooooo = ", token)

  if (!token) {
    return <Navigate to="/" />;
  }

  return children; 
};

export default PrivateRoute;
