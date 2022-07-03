const initialState={
  name:'',
  email:'',
  img:''
}

const authReducer = (
  state = JSON.parse( localStorage.getItem('user'))||initialState,
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
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: state.name,
      email: state.email,
    })
  );
};
const updateUser = (user) => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: user.name,
      email: user.email,
    })
  );
};
const logOut = () => {
  localStorage.removeItem("user");
};

export default authReducer;
