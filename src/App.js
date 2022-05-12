import React from "react";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState } from "react";

import "./index.css";
import AddTask from "./Components/AddTask";
export const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    { id: 3, text: "Food Shopping", day: "Feb 5th at 2:30pm", reminder: false },
  ]);

  // Add Task

  const addTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //   Toggle reminder

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title="Task tracker"
        ></Header>
        {showAddTask && <AddTask onAdd={addTasks} />}

        {tasks.length > 0 ? (
          <Tasks
            toggle={toggleReminder}
            tasks={tasks}
            deletetask={deleteTask}
          />
        ) : (
          "No Tasks To Show"
        )}
      </div>{" "}
    </>
  );
};
