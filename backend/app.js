const express = require('express');
const { connectToDatabase } = require('./db/mongodb')
const { PORT } = require('./constants/constant')
const cors = require('cors')
const ToDo = require('./routes/route')
const app = express();

connectToDatabase();

// middlewares
app.use(express.json());
app.use(cors());

// Droutes
app.use('/api', ToDo);

// starting my server
app.listen(PORT, () => console.log("Server Connected on Port Number " + PORT))