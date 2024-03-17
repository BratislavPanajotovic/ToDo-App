import { useReducer } from "react";
import reducer from "../reducer/Reducer";
const List = () => {
  const [tasks, dispatch] = useReducer(reducer, []);

  const addTask = (taskText) => {
    const newTask = {
      id: Math.random() * 10,
      text: taskText,
      completed: false,
    };
    dispatch({ type: "ADD_TASK", payload: newTask });
  };

  const deleteTask = (taskId) => {
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };

  const toggleTaskCompletion = (taskId) => {
    dispatch({ type: "TOGGLE_TASK_COMPLETION", payload: taskId });
  };

  return (
    <div>
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
      </form>
      <ul>
        {tasks.map((item) => (
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
