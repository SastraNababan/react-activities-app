import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
import styles from "./Item.module.css";

const Item = (props) => {
  const [editing, setEditing] = useState(false);
  const { activity } = props;
  const { completed, id, title } = activity;
  const { handleToggle, handleDelete, handleUpdate } = props;

  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const viewMode = {};
  const editMode = {};
  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleToggle(id)}
        />
        <button type="button" onClick={() => handleDelete(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          handleUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

Item.propTypes = {
  activity: PropTypes.isRequired,
};

Item.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default Item;
