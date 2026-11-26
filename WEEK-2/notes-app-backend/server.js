require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

// Middleware
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.json({
        message: "Notes App Backend API is running"
    });
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);

// Start server
const PORT = process.env.PORT || 5002;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
