import React, { Component, useEffect } from 'react';
import FormDialog from '../components/EditBikeModal';
import { userUpdate, getDbUser } from '../actions/userActions';
import { Form, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import PartView from '../pages/PartView';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import src from '../assets/pngwing.com.png';
const Bike = ({ position, bikeName, picLink, bikeId, userId, components }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [partView, setPartView] = React.useState(false);
  function handleClick(e) {
    e.preventDefault();
    console.log('clicked');
    setPartView(!partView);
  }
  function handleDelete(e) {
    e.preventDefault();
    const updateObj = {
      bikeId: bikeId,
      update: null,
      userId: userId,
      type: 'deleteBike',
    };
    const getUserThunk = userUpdate(updateObj);
    dispatch(getUserThunk);
  }
  return (
    // <div className="mainContainer">
    //   <div className="bikeCard" id={bikeId}>
    //     <h1>{bikeName}</h1>
    //     {partView ? (
    //       <PartView components={components} bikeId={bikeId} userId={userId} />
    //     ) : (
    //       <img src={picLink}></img>
    //     )}
    //     <button onClick={handleClick}>See Parts</button>
    //     <button onClick={handleDelete}>Delete Bike</button>
    //     <FormDialog bikeName={bikeName} bikeId={bikeId} userId={userId} />
    //   </div>
    //   <div className="partContainer"></div>
    // </div>
    <Card id="bikeCard">
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={src}
          alt="bike picture"
          onClick={handleClick}
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {bikeName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click To See Bike Parts
        </Typography>
        {partView ? (
          <PartView components={components} bikeId={bikeId} userId={userId} />
        ) : (
          <CardActions>
            {/* <Button size="small" color="primary">
                Edit Bike
              </Button> */}
            <Button onClick={handleDelete} size="small" color="primary">
              Delete Bike
            </Button>
            <FormDialog bikeName={bikeName} bikeId={bikeId} userId={userId} />
          </CardActions>
        )}
      </CardContent>
    </Card>
  );
};

export default Bike;
