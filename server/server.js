const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.json());

app.get('/', (req,res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})









module.exports = app.listen(port, () => console.log(`Listening on port ${port}`));