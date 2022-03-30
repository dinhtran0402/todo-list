import { Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Todo from "../Todo/index";
import { StyledIndex } from "./indexStyled";

function Index(props) {
  const { tasks, setTasks, updateTask } = props;
  const [selectedItem, setSelectedItem] = useState([]);
  const [searchText, setSearchText] = useState();
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const deleteTask = (ids) => {
    const emp = [];
    tasks.forEach((task) => {
      if (Array.isArray(ids)) {
        if (!ids.includes(+task.id)) {
          emp.push(task);
        }
      } else {
        if (ids !== +task.id) {
          emp.push(task);
        }
      }
    });
    setTasks(emp.filter((task) => task.id !== ids));
    onFinish();
  };
  const onFinish = () => {
    setSelectedItem([]);
  };
  return (
    <StyledIndex>
      <div className="title">To Do List</div>
      <div className="body-content">
        <Stack spacing={2}>
          <TextField
            fullWidth
            size="small"
            id=""
            label=""
            placeholder="Search ..."
            value={searchText}
            onChange={handleSearch}
          />
          {tasks

            .filter((item) => {
              if (searchText && searchText.length > 0) {
                return item.title
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              }
              return item;
            })
            .map((item) => (
              <div key={item.id}>
                <Todo
                  item={item}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                  selectedItem={selectedItem}
                  setSelectedItem={setSelectedItem}
                />
              </div>
            ))}
        </Stack>
      </div>
      {selectedItem.length > 0 && (
        <div className="bulk-action">
          <div>Bulk Action : </div>
          <div className="group-btn">
            <Stack direction="row" spacing={2}>
              <Button className="btn-done" variant="contained">
                Done
              </Button>
              <Button
                onClick={() => {
                  deleteTask(selectedItem);
                }}
                className="btn-remove"
                variant="contained"
              >
                Remove
              </Button>
            </Stack>
          </div>
        </div>
      )}
    </StyledIndex>
  );
}

export default Index;
