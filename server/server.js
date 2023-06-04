const express = require("express");
const mysql = require("mysql");
// for environment variables
const dotenv = require("dotenv").config();
//for server local port
const PORT = process.env.PORT || 5001;
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// for cross platform
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

// used for parsing the data from client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  session({
    secret: "key",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 600000 },
  })
);

//database connection
const conn = require("./databasehelpers/dbConnection/connection");
conn.connect((err) => {
  if (err) throw err;
  else console.log("database connected successfuly");
});

//routes
app.use("/", require("./routes/home"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use('/logout', require('./routes/logout'))
//server local port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

