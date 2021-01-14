import { getToken, hasExpiredToken } from "../api/token";

export async function authFecth(url, params, logOut) {
  const token = getToken();
  if (!token) {
    //usuario no logeado
    logOut();
  } else {
    if (hasExpiredToken(token)) {
      //token caducado
      logOut();
    } else {
      //token valido
      const paramsTemp = {
        ...params,
        header: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (error) {
        return error;
      }
    }
  }
}
