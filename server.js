const express = require('express');

const app = express();
const mongodb = require('./database/mongodb');

// Connect to MongoDB
mongodb.connect();

app.get('/', (req,res) => {
    console.log('Server is running successfully');

    res.send('Server is running on ' + PORT);
});

//routes
const productUpsRoutes = require('./routes/productUPSRoute');

app.use("/product/ups", )

// Start the server
const PORT = 7030;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
