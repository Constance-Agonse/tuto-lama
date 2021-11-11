const mongoose = require("mongoose");
// hey express, i would like to use mongoose to get a connection to my mongodb server
mongoose
.connect("mongodb://localhost/tuto-lama", {
//   useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(dbConnectionResult =>
  // everything is good ^^
  console.log(`Connected to Mongo! Database name: "${dbConnectionResult.connections[0].name}"`)
)
.catch(err => {
  // an error occured
  console.error("Error connecting to mongo", err)
});


/// npm install mongoose !!!



// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

// mongoose
//   .connect(MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
//   .then((x) => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
//   })
//   .catch((err) => {
//     console.error("Error connecting to mongo: ", err);
//   });