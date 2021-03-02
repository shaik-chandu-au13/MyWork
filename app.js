const express = require('express');
const port = process.env.PORT || 1234

const app = express();
app.get('/',(req, res) =>{
    res.send("Health ok")
})
app.listen(port,(req,res) => {
console.log(`listening at ${port}`)
});