require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const express = require ('express');
const indexRoute = require('./routes/index')
const userRoute = require('./routes/user')
const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 },()=>console.log('Mongodb is connected'))

app.use('/',indexRoute);
app.use('/user',userRoute);

// const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>console.log('Server is running on port :' +PORT));