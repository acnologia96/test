export function userReducer(state = null, action) {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return "LOGOUT";
    default:
      return state;
  }
}
