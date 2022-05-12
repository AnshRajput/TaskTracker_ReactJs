import { FaTimes } from "react-icons/fa";

const Task = ({ task, deletetask, toggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          onClick={() => deletetask(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
