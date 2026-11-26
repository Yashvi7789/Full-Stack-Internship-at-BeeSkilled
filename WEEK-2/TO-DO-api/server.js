const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json());

// Task Routes
app.use("/api/tasks", require("./routes/taskRoutes"));

// Home Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "To-Do API is running successfully!"
    });
});

// Server Port
const PORT = process.env.PORT || 5000;

// MongoDB Connection and Server Startup
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully!");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    });
