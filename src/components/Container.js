import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import Input from "./Input";
import List from "./List";

const Container = () => {
  function getInitialActivities() {
    const temp = localStorage.getItem("activities");
    const savedActivities = JSON.parse(temp);
    return savedActivities || [];
  }
  const [activities, setActivities] = useState(getInitialActivities());

  const _handleAdd = (title) => {
    const newActivity = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setActivities([...activities, newActivity]);
  };

  const _handleDelete = (id) => {
    setActivities([...activities.filter((activity) => activity.id !== id)]);
  };

  const _handleUpdate = (updatedTitle, id) => {
    setActivities(
      activities.map((activity) => {
        if (activity.id === id) {
          activity.title = updatedTitle;
        }
        return activity;
      })
    );
  };

  const _handleToggle = (id) => {
    setActivities((prevState) =>
      prevState.map((activity) => {
        if (activity.id === id) {
          return {
            ...activity,
            completed: !activity.completed,
          };
        }
        return activity;
      })
    );
  };

  useEffect(() => {
    const temp = JSON.stringify(activities);
    localStorage.setItem("activities", temp);
  }, [activities]);

  return (
    <>
      <div className="container">
        <div className="inner">
          <Header />
          <Input handleAdd={_handleAdd} />
          <List
            activities={activities}
            handleToggle={_handleToggle}
            handleDelete={_handleDelete}
            handleUpdate={_handleUpdate}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
