import React from "react";
import "./button.styles.css";

class CustomButton extends React.Component {
  render(props) {
    const { label, size, invertedButton } = this.props;
    return (
      <React.Fragment>
        <button
          className={`${invertedButton ? "c-btn-inverted" : "c-btn"}`}
          style={{ width: size }}
        >
          {label}
        </button>
      </React.Fragment>
    );
  }
}

export default CustomButton;
