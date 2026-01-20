const express = require("express");
const cors = require("cors");

const studentRoutes = require("./routes/student.routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/students', studentRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

module.exports = app;