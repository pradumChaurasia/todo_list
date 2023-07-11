const express = require('express')
const app = express();
const db=require('./db/mongoose')
const todorouter=require('./routes/todo-route')
require("dotenv").config();

const cors = require("cors");
app.use(express.json());
app.use(cors());
const PORT =process.env.PORT || 3000;

app.use(todorouter);


app.listen(PORT, () => console.log("Server running on port " + PORT));

// TvKPHRCka1QTlhYL
// gBfYGlm0racLJKIN pradum19441

// mongodb+srv://<username>:<password>@cluster0.zlloeaz.mongodb.net/?retryWrites=true&w=majority
