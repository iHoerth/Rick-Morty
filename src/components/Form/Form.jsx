import React, { useState } from "react";

import style from './Form.module.css'

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
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <form>
        <div>
          <label>Nombre de usuario:</label>
          <input name='username' type='text' onChange={(e) => handleInputChange(e)} vale={userData.username} />
          <span>{errors.username}</span>
        </div>

      </form>
    </div>
  )
}

export default Form