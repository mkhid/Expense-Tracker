import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import eventsRouter from './routes/events.js';


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));



const port = process.env.PORT || 3000; // Use environment variable or port 3000 by default
mongoose
  .connect("mongodb://127.0.0.1:27017/Events", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Connections succssful ....Server listening on PORT ${port}`))
  )
  .catch((error) => console.log(error));

//ROUTING
app.use('/events', eventsRouter);
