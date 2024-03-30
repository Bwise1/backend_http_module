const { readFile, writeFile } = require("../utils/fileManagement");
const Task = {
  id: String,
  title: String,
  status: String,
  due_date: Date,
  priority: String,
  category: String,
  description: String,
  user_id: String,
};

const taskFile = "./data/task.json";

function createTask(task) {
  writeFile(taskFile, task);
  return task;
}

function getUsersTasks(id) {
  let tasks = readFile(taskFile);
  return filterByElement(tasks, id, "user_id");
}

function filterByElement(array, value, key) {
  return array.filter((obj) => obj[key] === value);
}

module.exports = {
  createTask,
  getUsersTasks,
};
