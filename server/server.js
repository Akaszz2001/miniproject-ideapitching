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
const fileUpload = require("express-fileupload");

// for cross platform
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET","DELETE","PUT"],
    credentials: true,
  })
);

// used for parsing the data from client
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
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

//for checking session have any user
const verifyStudent = (req, res, next) => {
  if (req.session.Admin === 0) {
    next();
  } else {
    return res.json({ valid: false });
  }
};
const verifyAdmin = (req, res, next) => {
  if (req.session.Admin === 1) {
    next();
  } else {
    return res.json({ valid: false });
  }
};
const bothAdminAndStudent = (req, res, next) => {
  if (req.session.Admin === 1 || req.session.Admin === 0) {
    next();
  } else {
    return res.json({ valid: false });
  }
};
//routes
app.use("/", require("./routes/home"));
app.use("/login", require("./routes/login"));
app.use("/signup", require("./routes/signup"));
app.use("/logout", require("./routes/logout"));
app.use("/user", require("./routes/user"));
app.use("/ideaSubmission",require("./routes/ideaPosting"));
app.use("/mentor", require("./routes/mentor"));
//server local port
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

