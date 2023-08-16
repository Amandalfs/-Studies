const express = require('express');
const api = require("./api");

const app = express();
const port = 8080;


app.listen(port,()=>{
    console.log('Funcionou')
})

app.get('/usuario', async (req,res)=>{
        try {
            const response = await api.post("/usuarios", {
                "nome": "José1vdbdfbdsfv",
                "email": "jose@emadbdbildfvbbdfbd.com1",
                "senha": "1234561vbdbfabdadfbd",
            });
            return res.status(200).send(`${response}`);
        } catch (error) {
            return res.json({error})
        }
       
})

app.get("/", (req, res)=>{
    return res.json("rodando a api")
})
