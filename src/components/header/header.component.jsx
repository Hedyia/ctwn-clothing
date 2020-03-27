import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          {"Shop".toUpperCase()}
        </Link>
        <Link className="option" to="/contact">
          {"Contact".toUpperCase()}
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            {"sign out".toUpperCase()}
          </div>
        ) : (
          <Link className="option" to="/sign-in">
            {"sign in".toUpperCase()}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
