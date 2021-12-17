require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connect');
const tasksRoutes = require('./routes/tasks');

const PORT = process.env.PORT || 3500;

const app = express();

//* here we define the middleware *//  ww
app.use(express.json());

//* here we define the routes associated with tasks *//
app.use('/api/v1/tasks', tasksRoutes);

//* routes *//
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URL);
    app.listen(PORT, () => {
      console.log(`server is running ${PORT} port`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
