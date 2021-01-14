import React, { useMemo, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import "../scss/global.scss";
import "semantic-ui-css/semantic.min.css";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { setToken, getToken, removeToken } from "../api/token";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = getToken();

    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
  }, []);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logOut = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logOut,
      setReloadUser,
    }),
    [auth]
  );

  if (auth === undefined) return null;
  else
    return (
      <AuthContext.Provider value={authData}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </AuthContext.Provider>
    );
}
