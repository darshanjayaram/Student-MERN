const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const cors = require("cors");// when we are trying to access one server from another server


dotenv.config(); // to load the env variables

//connect to database
connectDB();

const app = express(); //this will gives us to create the express server with this app variable

// whenever we are doing the api, we have to create the express server with this app variable
app.use(express.json());

// to fix the cors issues
app.use(cors());


//define the routes
app.use("/api/students", require("./routes/studentRoutes"))

const PORT = process.env.PORT;
app.listen(PORT, ()=> console.log(`server is running at the port number ${PORT}`))