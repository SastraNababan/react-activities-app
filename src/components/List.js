import React from "react";
import PropTypes from "prop-types";
import Item from "./Item";

const List = (props) => {
  const { activities } = props;
  const { handleToggle, handleDelete, handleUpdate } = props;
  return (
    <ul>
      {activities.map((item) => (
        <Item
          key={item.id}
          activity={item}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ))}
    </ul>
  );
};

List.propTypes = {
  activities: PropTypes.isRequired,
};

List.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default List;
