const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

//import routers
const userRouter = require('./routers/users.router');

const app = express();


//db connection
mongoose.connect(process.env.DB);
let db = mongoose.connection;

db.on('error', (err) => { console.log(err.message) });

//everything is ok
db.once('open', ()=>{console.log('connected to db :)')})


//middle-wares
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routers
app.use('/users', userRouter);


//error handling
app.use((req, res, next) => {
    const err = new Error('This route is not defined yet.');
    err.status = 404;
    next(err)
});

app.use((error, req, res, next) => {
    if (error) {
        res.status(error.status || 500)
            .send({ message: error.message });

    }
});


//port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server up and running on port:', port);
})