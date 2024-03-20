const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");


const ticketRouter = require("./api/ticket");


const app = express(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
};

corsOptions.credentials = true;

// app.use(cors({ origin: 'http://localhost:5000', credentials: false }));

app.set("view engine", "ejs");
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.text({ type: 'text/html' }));

app.use(cookieParser());
app.use("/static", express.static(path.join(__dirname, "../public")));

app.use("/ticket", ticketRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      type: "error",
      message: err.message,
    });
  });
  
  module.exports = app;
  