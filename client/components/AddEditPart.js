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

export default function AddEditPart({
  componentName,
  currentHours,
  serviceInterval,
  partId,
  userId,
  bikeId,
  type,
}) {
  const dispatch = useDispatch();
  const [componentNameState, setComponentName] = useState(componentName);
  const [currentHoursState, setCurrentHours] = useState(currentHours);
  const [serviceIntervalState, setServiceInterval] = useState(serviceInterval);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const updateObj = {
      bikeId: bikeId,
      update: {
        componentName: componentNameState,
        currentHours: currentHoursState,
        serviceInterval: serviceIntervalState,
      },
      userId: userId,
      type: 'editPart',
      partId: partId,
    };
    if (type !== 'edit') {
      updateObj.partId = null;
      updateObj.type = 'addPart';
    }
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
    setOpen(false);
  };
  return (
    <div>
      {type === 'edit' ? (
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit Part
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          Add Part
        </Button>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {type === 'edit' ? 'Edit Your Part ' : 'Add A Part'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="partName"
            label="Part Name"
            type="text"
            value={componentNameState}
            onChange={(e) => {
              setComponentName(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Current Hours"
            type="number"
            value={currentHoursState}
            onChange={(e) => {
              setCurrentHours(e.target.value);
            }}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="serviceInterval"
            label="Service Interval"
            type="number"
            value={serviceIntervalState}
            onChange={(e) => {
              setServiceInterval(e.target.value);
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
