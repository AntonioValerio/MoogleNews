const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');



const app = express();

//enable parsing of http request
app.use(bodyParser.json());
app.use(cors());

//routes and api calls

//app.use("/",indexRouter);

//start node server
require('./configs/sequelize').connectDB()
.then(()=>{
    console.log('Connected successfully to database server');
    app.use('/news', require('./routes/article-route.js'))
const port = process.env.PORT || 5000;
app.listen(port,()=> {
    console.log(`\x1b[32m(PLAIN) Server Listening on port ${port}\x1b[0m.`);
});
})
.catch(err =>{
    console.error('Unable to connect to database server :',err.message);
});

