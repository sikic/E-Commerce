import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const LoginForm = (props) => {
  const { showRegister } = props;
  const [state, setstate] = useState(false);

  return (
    <Form className="login-form">
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo electronico"
      />

      <Form.Input name="password" type="password" placeholder="Contraseña" />
      <div className="actions">
        <Button type="button" basic onClick={showRegister}>
          Registrarse
        </Button>

        <div className="">
          <Button className="submit" type="submit">
            Entrar
          </Button>

          <Button type="button" basic onClick={showRegister}>
            ¿Has olvidado la contraseña?
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
