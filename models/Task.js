const { model, Schema } = require("mongoose");

const TaskSchema = new Schema({
  name: {
    type: String,
    required: [true, "the name has to be provided"],
    trim: true,
    minlength: 3,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("Task", TaskSchema);
