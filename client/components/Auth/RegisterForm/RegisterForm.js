import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const RegisterForm = (props) => {
  const { showLogin } = props;
  return (
    <Form className="login-form">
      <Form.Input name="name" type="text" placeholder="Nombre" />
      <Form.Input name="lastNames" type="text" placeholder="Apellidos" />
      <Form.Input name="username" type="text" placeholder="Nombre de usuario" />
      <Form.Input name="email" type="text" placeholder="Correo electronico" />
      <Form.Input name="password" type="password" placeholder="Contraseña" />
    </Form>
  );
};

export default RegisterForm;
