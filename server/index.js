const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ limit: '30mb', extended: true }));



const port = process.env.PORT || 3000; // Use environment variable or port 3000 by default
mongoose
  .connect(process.env.MONGO_URI_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server listening on PORT ${port}`))
  )
  .catch((error) => console.log(error));

