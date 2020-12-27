import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { loginApp } from "../../../hooks/useAuth";
import useAuth from "../../..//user";

const LoginForm = (props) => {
  const { showRegister, onCloseModal } = props;
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  console.log(auth);
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (FormData) => {
      setLoading(true);
      const response = await loginApp(FormData);
      if (response.jwt) {
        onCloseModal();
      } else console.log("No puedes entrar.");
      setLoading(false);
    },
  });
  return (
    <Form className="login-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo electronico"
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />

      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <div className="actions">
        <Button type="button" basic onClick={showRegister}>
          Registrarse
        </Button>

        <div className="">
          <Button className="submit" type="submit" loading={loading}>
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

function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}
function validationSchema(params) {
  return {
    identifier: Yup.string().email(true).required(true),
    password: Yup.string().required(true),
  };
}
