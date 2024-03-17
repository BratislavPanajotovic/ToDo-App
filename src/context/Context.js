import { createContext, useContext, useReducer } from "react";

const ToDoContext = createContext();

const ToDoReducer = (state, action) => {};

export const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ToDoReducer, { tasks: [] });

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDoContext = () => useContext(ToDoContext);
