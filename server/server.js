const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const bodyParser = require('body-parser')


// const MONGO_URI =   'mongodb+srv://acseery:XbVDf89kiMilgn1b@cluster0.emg5bja.mongodb.net/?retryWrites=true&w=majority';
const MONGO_URI =   'mongodb://localhost/Users';

mongoose.connect(MONGO_URI)


app.use(express.json());
// app.use(express.urlencoded())
app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
// app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

app.post('/signup', userController.createUser, (req, res)=>{
    res.status(200).json(res.locals.user)
})
app.get('/signup', (req, res)=>{
   res.send('getting signup')
})

app.post('/newbike',userController.verifyUser, userController.createBike, userController.createComponent, (req, res)=>{
    res.status(200).json(res.locals.user)
})
app.get('/newbike', (req, res)=>{
   res.send('getting signup')
})

app.get('/api/signin',userController.getUser, (req,res)=>{
    res.status(200).json(res.locals.user)
})









app.use('*', (req, res) => {
   return res.status(404).send('Not Found');
  });
  
app.use((err, req, res, next)=>{
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
      };

      const errorObj = Object.assign({}, defaultErr, err);
      console.log(errorObj.log);
      return res.status(errorObj.status).json(errorObj.message);
})





module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));