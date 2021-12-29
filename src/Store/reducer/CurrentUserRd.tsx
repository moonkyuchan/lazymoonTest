import { Action } from "../action/CurrentUserAt";

// interface CurrentUserRdProps {
//   currentUser: string;
// }

const initialState: string = "";

const CurrentUserRd = (state: string = initialState, action: Action) => {
  switch (action.type) {
    case "CURRENT_USER": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default CurrentUserRd;
