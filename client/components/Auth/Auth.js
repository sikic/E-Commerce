import React, { useState } from "react";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = (props) => {
  const { onCloseModal, setTitle } = props;
  const [showLogin, setshowLogin] = useState(true);

  const showLoginForm = () => {
    setTitle("Iniciar sesión");
    setshowLogin(true);
  };
  const showRegister = () => {
    setTitle("Crear cuenta");
    setshowLogin(false);
  };

  return showLogin ? (
    <LoginForm showRegister={showRegister} />
  ) : (
    <RegisterForm showLogin={showLoginForm} />
  );
};

export default Auth;
