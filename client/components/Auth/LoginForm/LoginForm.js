import React from "react";
import { Button } from "semantic-ui-react";

const LoginForm = (props) => {
  const { showRegister } = props;
  return (
    <div>
      <h1>Estamos en el login</h1>
      <Button onClick={showRegister}>Ir al registro</Button>
    </div>
  );
};

export default LoginForm;
