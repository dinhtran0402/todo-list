import React, { useEffect, useState } from "react";
import {
  TextField,
  Stack,
  Checkbox,
  Button,
  Grid,
  FormControl,
  Select,
  MenuItem,
  TextareaAutosize,
} from "@mui/material";
import { StyledIndex } from "./indexStyled";
import { useForm } from "react-hook-form";

function Index(props) {
  const { item, selectedItem, setSelectedItem, updateTask, deleteTask } = props;
  const [detailsTask, setDetailsTask] = useState([]);

  const [show, setShow] = useState(false);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    if (detailsTask) {
      setValue("id", detailsTask.id);
      setValue("title", detailsTask.title);
      setValue("description", detailsTask.description);
      setValue("date", detailsTask.date);
      setValue("priority", detailsTask.priority);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailsTask]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    updateTask(detailsTask.id, e);
    setShow(false);
  };

  return (
    <StyledIndex>
      <div className="content">
        <div>
          <Checkbox
            onChange={() => {
              if (!checked) {
                setChecked(true);
                setSelectedItem([...new Set([...selectedItem, +item.id])]);
              } else {
                setSelectedItem((pre) => {
                  setChecked(false);
                  return pre.filter((x) => x !== +item.id);
                });
              }
            }}
          />
          <span className="title-content">{item.title}</span>
        </div>
        <div className="group-btn">
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => {
                setShow(!show);
                setDetailsTask(item);
              }}
              className="btn-detail"
              variant="contained"
            >
              Detail
            </Button>
            <Button
              onClick={() => {
                deleteTask(item.id);
              }}
              className="btn-remove"
              variant="contained"
            >
              Remove
            </Button>
          </Stack>
        </div>
      </div>
      {show && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="body-form">
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
                    type="date"
                    name="date"
                    {...register("date", {
                      required: true,
                    })}
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
                      defaultValue={detailsTask.priority}
                      {...register("priority", {
                        required: true,
                      })}
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Normal">Normal</MenuItem>
                      <MenuItem value="High">High</MenuItem>
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
                Edit
              </Button>
            </Stack>
          </div>
        </form>
      )}
    </StyledIndex>
  );
}

export default Index;
