/**
 * TODO
 * [ ] apply delete prop
 * [ ] apply toggle prop
 * [ ] apply update prop
 * [ ] add prop type
 */

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./Item.module.css";

const Item = (props) => {
  const { activity } = props;
  const { completed, id, title } = activity;

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  return (
    <li className={styles.item}>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
        />
        <button type="button">
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      {/* <input type="text" className={styles.textInput} /> */}
    </li>
  );
};

export default Item;
