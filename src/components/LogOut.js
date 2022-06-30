import React, { useEffect } from "react";
import { logoutUser } from "../redux/auth/authActions";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
function LogOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(logoutUser({}));
  useEffect(() => {
    navigate("/products");
  }, []);
  console.log("logout", "logout");
  return <div>LogOut</div>;
}

export default LogOut;
