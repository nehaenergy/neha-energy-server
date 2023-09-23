const express = require('express');
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mongodb = require('./database/mongodb');

const PORT = 7000;

app.get('/', (req, res) => {
  console.log('Server is running successfully');

  res.send('Server is running on ' + PORT);
});

//routes
const productUpsRoutes = require('./routes/productUPSRoute');

app.use("/product/ups", productUpsRoutes);


// Connect to MongoDB
mongodb.connect().then(() => {

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });


}).catch(error => console.log("Error in connecting MongoDB:" + error));

