
const express=require("express");
const coursesRouter = require("./routes/courses")
const bodyParser=require('body-parser')
require("dotenv").config()
const mongoose = require('mongoose')
const app = express();
app.use(express.json())
app.use("/api/v1/courses",coursesRouter)
app.use(bodyParser.json())
mongoose.connect(process.env.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  // () => console.log("conneted...")
  );
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
app.listen(process.env.PORT,()=>{
    console.log("surver is running...");
})