import React, { useState } from "react";
import styles from "./Form.module.css";

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
};

export function Form() {
  const [values, setValues] = useState(INITIAL_FORM);

  const [registrado, setRegistrado] = useState(false);
  const [errorInForm, setErrorInForm] = useState(false);

  const handleChange = (e) => {
    console.log({ inputName: e.target.name, inputValue: e.target.value });
    if (errorInForm) {
      setErrorInForm(false);
    }
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFakeRegister = (e) => {
    e.preventDefault();

    if (!values.firstName || !values.lastName || !values.email) {
      setErrorInForm(true);
      return;
    }

    setRegistrado(true);
  };

  const reset = () => {
    setValues(INITIAL_FORM);
    setRegistrado(false);
  };

  return (
    <div className={styles.div}>
      <div>Ingresa tus datos</div>
      {errorInForm && <div className={styles.error}>error</div>}
      {registrado ? (
        <>
          <div className={styles.normal}>Hola {values.firstName}, bienvenido al mundo real!</div>
          <button onClick={reset}>Logout</button>
        </>
      ) : (
        <form onSubmit={handleFakeRegister} className={styles.form}>
          <input
            name="firstName"
            value={values.firstName}
            type="text"
            className={styles.input}
            placeholder="First name"
            onChange={handleChange}
          />
          <input
            name="lastName"
            value={values.lastName}
            type="text"
            className={styles.input}
            placeholder="Last name"
            onChange={handleChange}
          />
          <input
            name="email"
            value={values.email}
            className={styles.input}
            placeholder="e-mail"
            onChange={handleChange}
          />
          <button type="submit">registrarme</button>
        </form>
      )}
    </div>
  );
}
