const express= require('express');
const app = express();
const path = require('path');
app.use(express.static(path.resolve(__dirname,"public")));
app.listen(process.env.PORT || 3000, ()=> console.log('iniciando express'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, "views/home.html")));
app.get('/login',(req,res)=> res.sendFile(path.join(__dirname,"views/login.html")));
app.get("/register",(req, res)=> res.sendFile(path.join(__dirname,"views/register.html")))
app.post("/crear-pruducto", (req,res)=> "Enviaste info" )