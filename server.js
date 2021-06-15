const express = require('express');
const app = express();
const port = process.env.port || 4100;
require('dotenv/config')
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());


const postRouter = require('./routers/post')
app.use('/post', postRouter);

const userRouter = require('./routers/user')
app.use('/user', userRouter);


//connect Db..
mongoose.connect(`mongodb+srv://${process.env.username}:${process.env.password}@cluster0.mydlh.mongodb.net/myFirstDatabase1?retryWrites=true&w=majority`, 
{ useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('connected', () => { 
       console.log('MongoDB Connected!');
}); 


app.listen(port, () => {  console.log(`Example app listening on port ${port}!`)});