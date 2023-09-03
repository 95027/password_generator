import React from 'react';

const PwdStrChecker = ({password}) => {


    let pwdLen = password.length;
    let strength = "";

    if(pwdLen < 5) return ;

    if(pwdLen < 6) strength = "Very Weak";
    else if(pwdLen < 9) strength = "Weak";
    else if(pwdLen < 12) strength = "Medium";
    else if(pwdLen < 14) strength = "Strong";
    else if(pwdLen < 20) strength = "Very Strong";
    else strength = "";


  return (
    <>
      <span>Password Strength : </span>
      <span 
        className=
        {strength === "Very Strong" ? "green" :
        strength === "Strong" ? "lightGreen" :
        strength === "Medium" ? "orange" :
        strength === "Weak" ? "lightRed" : "red"}>
            {strength}
      </span>
    </>
  )
}

export default PwdStrChecker