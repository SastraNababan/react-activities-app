/**
 * TODO
 * [ ] convert activities to state
 * [ ] finish add handler
 * [ ] finish delete handler
 * [ ] finish update handler
 * [ ] finish toggle handler
 * [ ] finish toggle handler
 * [ ] apply local storage
 */

import React, { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

const Container = () => {
  // const _handleAdd = () => {};

  const _handleAdd = (title) => {};

  const _handleDelete = () => {};

  const _handleUpdate = () => {};

  const _handleToggle = () => {};

  const activities = [
    {
      id: 1,
      title: "activity 1",
      complete: false,
    },
    {
      id: 2,
      title: "activity 2",
      complete: false,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <Input />
          <List activities={activities} />
        </div>
      </div>
    </>
  );
};

export default Container;
