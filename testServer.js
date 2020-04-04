"use strict";
const express = require('express');
const app = express();
const port = 8080;

app.use(express.json({limit: '2mb'}));
app.use(express.static(__dirname));


app.get('/', (req, res)=>{
   res.sendFile(__dirname+'/index.html');
});

app.listen(port, () => console.log(`GoCorona test server is listening on ${port}`));