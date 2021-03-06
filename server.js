const express = require("express");
const compression = require("compression");
const apiRoutes = require("./routes/apiRoute");
const htmlRoutes = require("./routes/htmlRoute");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 8000;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(compression());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));