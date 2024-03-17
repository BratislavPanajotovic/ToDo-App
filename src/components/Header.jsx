import { useToDoContext } from "../context/Context";

const Navbar = () => {
  const { state } = useToDoContext();
  const pendingTodos = state.tasks.filter((task) => !task.completed).length;

  return (
    <div>
      <h2>Pending todos: {pendingTodos}</h2>
    </div>
  );
};

export default Navbar;
