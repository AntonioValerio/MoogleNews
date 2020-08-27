const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');

const app = express();

//enable parsing of http request
app.use(bodyParser.json());
app.use(cors());

//routes and api calls

app.use('/hello',(req,res)=>res.send('HELLO WORLD'));

//start node server

const port = process.env.PORT || 3000;
app.listen(port,()=> {
    console.log(`\x1b[32m(PLAIN) Server Listening on port ${port}\x1b[0m.`);
});

