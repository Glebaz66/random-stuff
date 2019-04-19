'use strict'
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = login => {
  return login.length > 3 && login.length < 17 ? true : false;
};

const isLoginUnique = (logins, login) => {
  const isIncuded = logins.includes(login);
  return isIncuded ? false : true;
};

const addLogin = function(logins, login) {
  const valid = isLoginValid(login);

  if (valid === false){
    return alert('password must be 4 - 16 letters long');
  };
  
  const incude = isLoginUnique(logins, login);
  
  if (incude === false){
    return alert('is password already exists');
  } else {
    logins.push(login);
    return alert('login added');

  }
};
