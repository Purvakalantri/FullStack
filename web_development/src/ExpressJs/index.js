const express = require('express'); // Missing semicolon added
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
    res.send('Hello user!');
});

app.get('/students', (req, res) => {
    res.send('Hello students!');
  });

  app.get('/error', (req, res) => {
    res.sendStatus(502);
  });

app.get('/errors',(req,res)=>{
    res.sendStatus(404);
});

app.get('/download', (req, res) => {
    res.download("index.js");
  });

app.get("/json",(req,res)=>
{
    res.json({
        
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "category": "men's clothing",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
          
    });
});
app.post("/signup",(req,res)=>{
    const name=req.body.name;
    res.send(`Thanks for registering ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
