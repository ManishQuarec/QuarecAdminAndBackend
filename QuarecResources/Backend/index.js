const express = require('express');
const app = express();
app.use(express.json());

app.post('/data', (req, res)=> {
    console.log(req.body);
    console.log("data",req);
  res.send('Hello World501515610513');
}) 

app.listen(5000,()=>{
 console.log("listening Data" );
});