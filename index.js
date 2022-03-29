const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json())
app.listen(
    PORT,
    () => console.log(`it is live http://localhost:${PORT}`)
)

app.get('/person', (req,res)=>{
    res.status(200).send({
        Name:'IsTheFirst',
        Age:'78'
    })
});

app.post('/person/:id',(req,res) =>{
    const {id} = req.params;
    const {Name} = req.body;
    if(!Name){
        res.status(418).send({
            message:'We need a Name!'        })
    }
    res.send({
        person: `Hello ${Name} your ID is ${id}`
    })
})