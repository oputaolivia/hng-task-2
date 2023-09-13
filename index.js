const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const { userRoute } = require("./routes/userRoute");

const app = express()
dotenv.config()
connectDB();

const corsOptions ={
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api", userRoute);

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Task running on port ${PORT}`)
});