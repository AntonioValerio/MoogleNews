
const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');


const app = express();

//enable parsing of http request
app.use(bodyParser.json());
app.use(cors());

//routes and api calls

app.use("/", express.static(path.join(__dirname, "..", "public/index.html")));
app.use('/news', require('./routes/article-route.js'))
//app.use('/user',require('./routes/user-route.js'))



//start node server
//app.use('/user',require('./routes/user-route.js'))
//start node server
require('./configs/sequelize').connectDB()
.then(()=>{
    console.log('Connected successfully to database server');
const port = process.env.PORT || 4001;
app.listen(port,()=> {
    console.log(`\x1b[32m(PLAIN) Server Listening on port ${port}\x1b[0m.`);
});
})
.catch(err =>{
    console.error('Unable to connect to database server :',err.message);
});

