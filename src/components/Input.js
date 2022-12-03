import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaPlusCircle } from "react-icons/fa";

const Input = (props) => {
  const [inputText, setInputText] = useState({
    title: "",
  });

  const { handleAdd } = props;

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      handleAdd(inputText.title);
      setInputText({
        title: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add activity..."
        value={inputText.title}
        onChange={onChange}
        name="title"
      />
      <button type="button" className="input-submit">
        <FaPlusCircle
          style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }}
        />
      </button>
    </form>
  );
};

Input.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default Input;
