import React from "react";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { AppProvider } from "./context";

const App = () => {
  return (
    <AppProvider>
      <div className="App">
        <TodoForm />
        <Todos />
      </div>
    </AppProvider>
  );
};

export default App;
