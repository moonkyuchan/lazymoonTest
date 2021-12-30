export type Action = {
  type: "CURRENT_USER" | "LOGOUT";
  payload: string;
};

export const CurrentUserAt = (user: string): Action => {
  return {
    type: "CURRENT_USER",
    payload: user,
  };
};

export const LogOutAt = (user: string): Action => {
  return {
    type: "LOGOUT",
    payload: user,
  };
};
