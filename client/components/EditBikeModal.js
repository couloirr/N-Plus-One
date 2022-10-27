import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../actions/userActions';

export default function FormDialog({ bikeName, bikeId, userId, type }) {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState(bikeName);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    console.log(itemName);

    const updateObj = {
      bikeId: bikeId,
      update: { bikeName: itemName },
      userId: userId,
      type: 'editBike',
    };
    if (type === 'add') {
      updateObj.objectId = null;
      updateObj.type = 'addBike';
    }
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
    setOpen(false);
  };
  return (
    <div>
      {type === 'add' ? (
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Bike
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit Bike
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {type === 'add' ? 'Name Your Bike ' : 'Edit Your Bike Name'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Bike Name"
            type="text"
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
