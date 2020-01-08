require("./config/config.js")
const express = require("express") ;
const app = express();
const body_parser = require("body-parser");
const port = process.env.port;

app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());

app.get('/',(req,res)=>{
    res.send("Hello world");
});

app.get('/usuario',(req,res)=>{
    res.send("GET");
});

app.post('/usuario',(req,res)=>{
    let body = req.body;
    console.log(req.body);
    res.json(
        {body}
    );
});

app.put('/usuario',(req,res)=>{
    res.send("PUT");
});

app.delete('/usuario',(req,res)=>{
    res.send("DELETE");
});

app.listen(port,() =>{
    console.log(`Escuchando en el puerto: ${port}`);
})