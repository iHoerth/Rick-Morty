import React, { useState } from "react";

import style from './Form.module.css'

import {validate} from '../../helpers/Helpers.jsx'


const Form = () => {

  const [userData,setUserData] = useState({
    username: '',
    password: '',
  });

  const [errors,setErrors] = useState({
    username: '',
    password: '',
  });


  const handleInputChange = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value})
    setErrors(validate({...userData,[e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
    if(errors.length) {
      alert('Debe llenar todos los campos')
    } else {
      alert('Datos completos')
    }
  }

  return (
    <div className={style.formWrapper}>
        <form className={style.formContainer} onSubmit={(e) => handleSubmit(e)}>
          <div className={style.formFieldContainer}>
            <label className={style.formFieldText}>Usuario:</label>
            <input
              name='username'
              type='text'
              onChange={(e) => handleInputChange(e)}
              vale={userData.username}
              className={`${style.formFieldInput} ${(errors.username && style.warning)}`}
            />
          </div>
          <span className={style.danger}>{errors.username}</span>

          <div className={style.formFieldContainer}>
            <label className={style.formFieldText}>Password:</label>
            <input
              name='password'
              type='text'
              onChange={(e) => handleInputChange(e)}
              vale={userData.password}
              className={`${style.formFieldInput} ${(errors.password && style.warning)}`}
            />
          </div>
          <span className={style.danger}>{errors.password}</span>

          <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Form