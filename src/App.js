import "./App.css";
import Grid from "@mui/material/Grid";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { useState } from "react";
import data from "./components/TodoList/data.json";
function App() {
  const [tasks, setTasks] = useState(data);
  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((item) => (item.id === id ? updatedTask : item)));
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <NewTask addTask={addTask} tasks={tasks} />
        </Grid>
        <Grid item xs={6}>
          <TodoList tasks={tasks} setTasks={setTasks} updateTask={updateTask} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
