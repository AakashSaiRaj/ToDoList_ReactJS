import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// edit button start
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// edit button end

export default function Items(props) {
  // edit start
  const [editTitle, setEditTitle] = useState(props.title);
  const [editStatus, setEditStatus] = useState(props.status);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function editTitleFunc(event) {
    const currentTitle = event.target.value;
    setEditTitle(currentTitle);
  }

  function editStatusFunc(event) {
    const currentStatus = event.target.value;
    setEditStatus(currentStatus);
  }
  function handleEdit() {
    setChecked(props.status ? true : false);
    props.onEdit(editTitle, editStatus, props.id);
    handleClose();
    // props.onFilterEdit(props.);
  }

  // edit end

  const [isChecked, setChecked] = useState(props.status);
  function deleteItem() {
    props.onDelete(props.id);
  }

  function checkBox() {
    setChecked(!isChecked);
    console.log("checked");

    // setChecked(props.status ? false : true);
    props.onCheckbox(props.status, props.id, isChecked);
    // props.status = isChecked ? "Completes" : "nope";
  }

  return (
    // start new
    <div className="grid-container">
      <div className="grid-item itemCheckBox">
        <FormControlLabel
          style={{
            textDecoration: isChecked ? "line-through" : null
          }}
          control={<Checkbox />}
          onChange={checkBox}
          label={props.title}
        />
      </div>
      <div className="grid-item itemTitle">
        <p>{props.status}</p>
      </div>
      <div className="grid-item itemOption">
        <button className="deleteButton" onClick={deleteItem}>
          <DeleteIcon />
        </button>
        <button onClick={handleClickOpen}>
          <EditIcon />
        </button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
            value={editTitle}
            onChange={editTitleFunc}
            required
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" required>
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={editStatus}
                label="Status"
                onChange={editStatusFunc}
              >
                <MenuItem value={1}>Completed</MenuItem>
                <MenuItem value={0}>Incomplete</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleEdit}>Edit Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
