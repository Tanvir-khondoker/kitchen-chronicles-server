const express = require('express')
const app = express()
const port = 5000

const chefs = require('./chefs_data.json');



app.get('/', (req, res) => {
  res.send('Hello World! recipe is running')
})


app.get('/chefs', (req, res)=>{
    res.send(chefs)
});

app.get('/chefs/:id', (req, res)=>{
    const id = req.params.id;
    const selectedChef = chefs.find( n=> n.id === id);
    res.send(selectedChef);
    // console.log(id);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




