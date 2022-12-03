/**
 * TODO
 * [ ] pass delete handler
 * [ ] pass update handler
 * [ ] pass toggle handler
 * [ ] add prop type
 */
import React from "react";
import Item from "./Item";

const List = (props) => {
  const { activities } = props;

  return (
    <ul>
      {activities.map((item) => (
        <Item key={item.id} activity={item} />
      ))}
    </ul>
  );
};

export default List;
