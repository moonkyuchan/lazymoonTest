export type Action = {
  type: "CURRENT_USER";
  payload: string;
};

export const CurrentUserAt = (user: string): Action => {
  return {
    type: "CURRENT_USER",
    payload: user,
  };
};
