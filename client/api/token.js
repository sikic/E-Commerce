import jwtDecode from "jwt-decode";
import { TOKEN } from "../utils/constants";

export function setToken(token) {
  localStorage.setItem(TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(TOKEN);
}

export function removeToken() {
  return localStorage.removeItem(TOKEN);
}
export function hasExpiredToken(token) {
  const tokenDecode = jwtDecode(token);
  const expiredDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expiredDate) {
    //token expirado
    return true;
  } else {
    //token ok
    return false;
  }
}
