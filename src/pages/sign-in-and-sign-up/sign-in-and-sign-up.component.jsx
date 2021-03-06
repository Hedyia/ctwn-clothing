import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

const SignInAndSignUp = () => {
  return (
    <div className="container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
