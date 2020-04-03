import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";
import { createStructuredSelector } from "reselect";
import { selectSections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSecionsProps }) => (
        <MenuItem key={id} {...otherSecionsProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: state => selectSections(state)
});
export default connect(mapStateToProps)(Directory);
