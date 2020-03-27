import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.styles.scss";

class SignUp extends Component {
  state = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password and confrim password does not match.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={displayName}
            title="Name"
            handleChange={this.handleChange}
          />
          <FormInput
            name="email"
            type="email"
            value={email}
            title="Email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            title="Password"
            handleChange={this.handleChange}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            title="Confirm password"
            handleChange={this.handleChange}
          />
          <CustomButton type="submit">{"register".toUpperCase()}</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
