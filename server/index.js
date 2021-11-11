const express = require ("express");
const mongoose = require ("mongoose");
const dotenv = require ("dotenv");
const pinRoute = require ('./routes/pin');

dotenv.config();

const app = express ();
mongoose
.connect(process.env.MONGO_URL, {useNewUrlParser: true,
useUnifiedTopology: true})
.then(() => {console.log('MONGODBCONNECTED')})
.catch((err) =>  console.log(err));
//zone de préfixage

app.use("/api/pins", pinRoute);
app.use(express.json());


app.listen(8800, () => {
  console.log('backend server is running')
})