const express=require('express');
const Transaction=require('./models/Transaction.js');
require('dotenv').config();

const app=express();
const cors=require('cors');
const mongoose  = require('mongoose');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
res.json('ok')
})

app.post('/api/transaction',async(req,res)=>{
    //console.log(url)
    await mongoose.connect(process.env.MONGODB_URL)
    const {product,desc,date,price}=req.body
    const transaction=await Transaction.create({product,desc,date,price})
    res.json(transaction)

}
)

app.get('/api/transactions',async(req,res)=>{
await mongoose.connect(process.env.MONGODB_URL);
const transactions=await Transaction.find();
res.json(transactions);

})

app.listen(4000)