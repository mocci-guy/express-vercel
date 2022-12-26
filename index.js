// Import packages
const express = require("express");
const totalSupply = require("./routes/totalSupply");
const circulationSupply = require("./routes/circulationSupply");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/totalSupply", totalSupply);
app.use("/circulationSupply", circulationSupply);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
