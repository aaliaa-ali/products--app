export const registerUser = (user) => ({
  type: "REGISTER_USER",
  user,
});
export const loginUser = (user) => ({
  type: "LOG_IN_USER",
  user,
});

export const logoutUser = (user) => ({
  type: "LOG_OUT_USER",
  user,
});
export const updateUser = (user) => ({
  type: "UPDATE_USER",
  user,
});
