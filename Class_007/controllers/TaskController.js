const express = require("express");

const router = express.Router();
const { v4: uuidv4 } = require("uuid");

const { createTask, getUsersTasks } = require("../models/TaskModel");
const { getUserById } = require("../models/UserModel");

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  const user = getUserById(id);
  if (!user) {
    res
      .status(404)
      .json({ error: true, message: "no user with this id found" });
  }

  if (
    (!task.title,
    !task.status,
    !task.due_date,
    !task.priority,
    !task.category,
    !task.description)
  ) {
    res.status(400).json({ error: true, message: "invalid req" });
  }

  task.user_id = id;
  task.id = uuidv4();

  let newTask = createTask(task);
  console.log("after creating", newTask);
  res.status(201).json({ message: "created task successfully", data: newTask });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  let yourTask = getUsersTasks(id);
  res
    .status(200)
    .json({ message: "tasks returned successfully", data: yourTask });
});

module.exports = router;
