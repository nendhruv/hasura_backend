const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const app = express();
const db = require("./app/models");
var corsOptions = {
  // origin: "http://192.168.1.56:3000"
  origin: "http://localhost:3000"
  // origin: "http://15.207.202.9:3000"
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded());


db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });


const path = __dirname + '/app/views/';

app.use(express.static(path));
app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

require('./app/routes/auth.routes')(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});