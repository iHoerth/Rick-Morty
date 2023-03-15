export const validate = (inputs) => {
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const errors = {};

  if(!inputs.username){
    errors.username = 'Se requiere un nombre de usuario'
  }

  // if(!regexEmail.test(inputs.email)){
  //   errors.email = 'Debe ser un correo electrónico'
  // }

  if(!inputs.password){
    errors.password = 'Se requiere una contraseña'
  }
  console.log(errors);
  return errors;
}
