const express = require("express");
// * import controllers *//
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} = require("../controllers/tasks");

const router = express.Router();

//* set up all routes *//

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
