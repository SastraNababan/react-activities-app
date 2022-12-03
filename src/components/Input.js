/**
 * TODO
 * [ ] finish input value & onChange method
 * [ ] finish form handleSubmit
 * [ ] add prop type
 */
import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const Input = (props) => {
  const handleSubmit = (e) => {};

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add activity..."
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

export default Input;
