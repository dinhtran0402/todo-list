import "./App.css";
import Grid from "@mui/material/Grid";
import NewTask from "./components/NewTask";
import TodoList from "./components/TodoList";
import { useState } from "react";
import data from "./components/TodoList/data.json";
function App() {
  const initialValue = {
    id: null,
    title: "",
    date: "",
    description: "",
    priority: "Normal",
  };

  const [currentTask, setCurrentTask] = useState(initialValue);
  const [tasks, setTasks] = useState(data);

  const addTask = (task) => {
    task.id = tasks.length + 1;
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    setTasks(tasks.map((item) => (item.id === id ? updatedTask : item)));
  };
  const valueTasks = (item) => {
    setCurrentTask({
      id: item.id,
      title: item.title,
      date: item.date,
      description: item.description,
      priority: item.priority,
    });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <NewTask addTask={addTask} tasks={tasks} />
        </Grid>
        <Grid item xs={6}>
          <TodoList
            tasks={tasks}
            setTasks={setTasks}
            updateTask={updateTask}
            valueTasks={valueTasks}
            currentTask={currentTask}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
