import { Action } from "../action/CurrentUserAt";

// interface CurrentUserRdProps {
//   currentUser: string;
// }

const initialState: string = localStorage.getItem("uid") || "";

const CurrentUserRd = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case "CURRENT_USER": {
      localStorage.setItem("uid", action.payload);
      return action.payload;
    }
    case "LOGOUT": {
      localStorage.removeItem("uid");
      return "";
    }
    default:
      return state;
  }
};

export default CurrentUserRd;
