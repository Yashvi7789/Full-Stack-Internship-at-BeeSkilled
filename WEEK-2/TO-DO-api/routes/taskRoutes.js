const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const Task = require("../models/Task");

// Helper: Validate MongoDB ID
const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// GET all tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tasks",
            error: error.message
        });
    }
});

// GET single task
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID"
            });
        }

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch task",
            error: error.message
        });
    }
});

// POST create a task
router.post("/", async (req, res) => {
    try {
        const { title, description, completed } = req.body;

        if (typeof title !== "string" || !title.trim()) {
            return res.status(400).json({
                success: false,
                message: "Task title is required"
            });
        }

        if (
            description !== undefined &&
            typeof description !== "string"
        ) {
            return res.status(400).json({
                success: false,
                message: "Description must be a string"
            });
        }

        if (
            completed !== undefined &&
            typeof completed !== "boolean"
        ) {
            return res.status(400).json({
                success: false,
                message: "Completed must be true or false"
            });
        }

        const newTask = await Task.create({
            title,
            description,
            completed
        });

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: newTask
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// PUT update a task
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID"
            });
        }

        const allowedFields = ["title", "description", "completed"];
        const updates = {};

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                updates[field] = req.body[field];
            }
        }

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide at least one valid field to update"
            });
        }

        if (
            updates.title !== undefined &&
            (typeof updates.title !== "string" || !updates.title.trim())
        ) {
            return res.status(400).json({
                success: false,
                message: "Title must be a non-empty string"
            });
        }

        if (
            updates.description !== undefined &&
            typeof updates.description !== "string"
        ) {
            return res.status(400).json({
                success: false,
                message: "Description must be a string"
            });
        }

        if (
            updates.completed !== undefined &&
            typeof updates.completed !== "boolean"
        ) {
            return res.status(400).json({
                success: false,
                message: "Completed must be true or false"
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            updates,
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: updatedTask
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
});

// DELETE a task
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!isValidId(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID"
            });
        }

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully",
            data: deletedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete task",
            error: error.message
        });
    }
});

module.exports = router;
