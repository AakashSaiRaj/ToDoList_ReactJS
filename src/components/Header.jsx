import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// select  start
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// select end

export default function Header(props) {
  const [isStatus, setstatus] = React.useState(0);

  function handleChangeStatus(event) {
    const statusValue = event.target.value;
    setstatus(statusValue);
    // statusValue?
    // console.log(statusValue);
  }

  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const [title, setTitle] = React.useState("");
  function handleTitle(event) {
    const value = event.target.value;
    setTitle(value);
  }
  function handleSubmit() {
    props.newTitle({ title: title, status: isStatus });
    handleClose();
    setTitle("");
    setstatus(0);
  }

  const [filterName, setFilterName] = React.useState(2);
  function filterStatus(event) {
    const filterName = event.target.value;
    setFilterName(filterName);
    props.onFilter(filterName);
  }

  return (
    <div className="header">
      <div className="grid-item itemb1">
        <Button variant="contained" onClick={handleClickOpen}>
          Add Task
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Task</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              required
              onChange={handleTitle}
              value={title}
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" required>
                  Status
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={isStatus}
                  label="Status"
                  onChange={handleChangeStatus}
                >
                  <MenuItem value={1}>Completed</MenuItem>
                  <MenuItem value={0}>Incomplete</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div className="grid-item itemb2">
        {/* <Button variant="contained">Status</Button> */}

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" required>
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={filterName}
              label="Status"
              onChange={filterStatus}
            >
              <MenuItem value={1}>Completed</MenuItem>
              <MenuItem value={0}>Incomplete</MenuItem>
              <MenuItem value={2}>All</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
