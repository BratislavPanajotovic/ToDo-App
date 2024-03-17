import { useState } from "react";

const List = () => {
  const [task, setTask] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: Math.random() * 10,
      text: taskText,
      completed: false,
    };
    setTask([...task, newTask]);
  };

  const deleteTask = (taskId) => {
    const newTasks = task.filter((item) => item.id !== taskId);
    setTask(newTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    setTask((prevTask) => {
      return prevTask.map((item) =>
        item.id === taskId ? { ...item, completed: !item.completed } : item
      );
    });
  };

  return (
    <div>
      {" "}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const taskText = e.target.task.value;
          addTask(taskText);
          e.target.task.value = "";
        }}
      >
        <input type="text" name="task" placeholder="Enter a new task" />
        <button type="submit">Add Task</button>
      </form>{" "}
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toggleTaskCompletion(item.id)}
            />
            <span
              style={{
                textDecoration: item.completed ? "line-through" : "none",
              }}
            >
              {item.text}
            </span>
            <button onClick={() => deleteTask(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
