import { useNavigate } from "react-router-dom";

const initialValues = { img: "", name: "", email: "" };

const authReducer = (
  // state = JSON.parse(localStorage.getItem("user")) || {},
  state = {},
  action
) => {
  const { type, user } = action;
  switch (type) {
    case "REGISTER_USER":
      registerUser(user);
      return user;
    case "LOG_IN_USER":
      registerUser(user);
      return user;
    case "LOG_OUT_USER":
      logOut();
      return user;
    case "UPDATE_USER":
      updateUser(user);
      return user;
    default:
      return state;
  }
};

const registerUser = (state) => {
  // console.log('state', state)
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: state.name,
      email: state.email,
      img: `${state.img}`,
    })
  );
};
const updateUser = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: user.name,
      email: user.email,
      img: user.img,
    })
  );
};
const logOut = () => {
  localStorage.removeItem("user");
};

export default authReducer;
