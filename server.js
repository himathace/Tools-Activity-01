const port = 3001;
const exp = require('express');
const app = exp();
const path = require('path');
let storeName ="";
app.use(exp.static('public'));
app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));


app.post('/greet',(req,res) =>{
    storeName = req.body.name;
    res.redirect('/new.html');
})

app.get('/public/new.html', (req, res) => {
    res.redirect('/new.html');
})

app.get('/greet',(req,res)=>{
   res.json({name:storeName})
})
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);

});