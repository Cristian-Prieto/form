import React, { useState } from "react";
import styles from "./Form.module.css";

export function Form() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const [registrado, setRegistrado] = useState( false );
  const [errorInForm, setErrorInForm] = useState( false );

  const handleFirstNameChange = (e) => {

    setValues({ ...values, firstName: e.target.value })
  
  }

  const handleLastNameChange = (e) => {

    setValues({ ...values, lastName: e.target.value })
  
  }

  const handleEmailChange = (e) => {

    setValues({ ...values, email: e.target.value })
  
  }

  const handleFakeRegister = (e) => {
    e.preventDefault();
    
    if( !values.firstName || !values.lastName || !values.email ) {
      setErrorInForm( true );
      return;
    }
    setRegistrado(true)
  }



  return (
    <div className={styles.div}>
      <form onSubmit={ handleFakeRegister } className={styles.form}>
        <div>
          Ingresa tus datos
        </div>
        { !errorInForm ? 
        <div className={styles.normal} >HOLA PUTO</div> : 
        <div className={styles.error} >error</div> 
        }
         
 

       
       
        <input value={values.firstName} type="text" className={styles.input} placeholder="First name" onChange={handleFirstNameChange} />
        <input value={values.lastName} type="text" className={styles.input} placeholder="Last name" onChange={handleLastNameChange} />
        <input value={values.email} className={styles.input} placeholder="e-mail" onChange={handleEmailChange} />
        <button type="submit">registrarme</button>
      </form>
    </div>
  )
}
