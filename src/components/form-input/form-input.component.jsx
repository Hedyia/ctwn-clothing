import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ title, handleChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {title && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {title}
        </label>
      )}
    </div>
  );
};

export default FormInput;
