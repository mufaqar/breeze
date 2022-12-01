export const setToken = (accessToken) => localStorage.setItem("accessToken",accessToken);
export const getToken = () => localStorage.getItem("accessToken");