import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledIndex } from "./indexStyled";
function Index(props) {
  const formatYmd = (date) => date.toISOString().slice(0, 10);

  const initialFormState = {
    id: null,
    title: "",
    date: formatYmd(new Date()),
    description: "",
    priority: "Normal",
  };

  const [task, setTask] = useState(initialFormState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (event) => {
    props.addTask(event);
    setTask(initialFormState);
  };

  return (
    <StyledIndex>
      <div className="title">New Task</div>
      <div className="body-content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <TextField
              name="title"
              fullWidth
              size="small"
              id=""
              placeholder="Add new task"
              {...register("title", {
                required: true,
              })}
            />
            {errors.title && (
              <span style={{ color: "red" }}>title is required</span>
            )}
            <div>
              <label htmlFor="des" className="text-label">
                Description
              </label>
              <TextareaAutosize
                name="description"
                id="des"
                className="width-textarea mt-5"
                minRows={10}
                placeholder="Add description"
                {...register("description", {
                  required: true,
                })}
              />
              {errors.description && (
                <span style={{ color: "red" }}>description is required</span>
              )}
            </div>
            <Grid container>
              <Grid item xs={5}>
                <label htmlFor="date" className="text-label">
                  Due Date
                </label>
                <TextField
                  fullWidth
                  className="mt-5"
                  selected={task.date}
                  type="date"
                  name="date"
                  defaultValue={task.date}
                  inputProps={{ min: task.date }}
                  {...register("date")}
                />
              </Grid>
              <Grid item xs={2}></Grid>
              <Grid item xs={5}>
                <label htmlFor="priority" className="text-label">
                  Priority
                </label>
                <FormControl fullWidth>
                  <Select
                    name="priority"
                    className="mt-5"
                    labelId="priority"
                    id="priority"
                    defaultValue={task.priority}
                    {...register("priority", {
                      required: true,
                    })}
                  >
                    <MenuItem value="Low">Low</MenuItem>
                    <MenuItem value="Normal">Normal</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    {errors.priority && (
                      <span style={{ color: "red" }}>title is required</span>
                    )}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              className="btn-add"
              variant="contained"
              color="success"
            >
              Add
            </Button>
          </Stack>
        </form>
      </div>
    </StyledIndex>
  );
}

export default Index;
