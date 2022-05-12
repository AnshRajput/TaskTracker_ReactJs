import Task from "./Task";

const Tasks = ({ tasks, deletetask, toggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          toggle={toggle}
          task={task}
          deletetask={deletetask}
        />
      ))}
    </>
  );
};

export default Tasks;
