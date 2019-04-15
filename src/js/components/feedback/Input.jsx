import React from "react";
import PropTypes from "prop-types";

const Input = ({label, text, value, handleChange, placeHolder}) => (
    <div className="form-group">
        <label htmlFor={label}>{text}</label>
        <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={placeHolder}
            required
        />
    </div>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeHolder: PropTypes.string.isRequired
};

export default Input;
