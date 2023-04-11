const express = require("express");

const routes = express.Router();

let lista = [{"id":1,"nome":"Yuri","idade":19},{"id":2,"nome":"Diogo","idade":19},{"id":3,"nome":"Luan","idade":19}]

routes.get("/",(req,res)=>{
    res.status(200).json(lista)
});

routes.get("/:id",(req,res)=>{
    res.status(200).json(lista[req.params.id-1])
});

routes.delete("/:id",(req,res)=>{
    lista.splice(req.params.id-1,1);
    res.status(200).redirect("/")
})

module.exports = routes;
