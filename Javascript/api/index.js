const express = require('express');

const app = express();
const port = 8080;


app.listen(port,()=>{
    console.log('Funcionou')
})

app.route('/')
    .get((req,res)=>{
        res.status(200).send(`porta ${port}`)
    })
