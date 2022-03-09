export const useUser = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return user;
  }
  return false;
};
