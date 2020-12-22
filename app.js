require('dotenv/config');

const express = require('express'); //npm install express
const cors = require('cors'); //npm i cors
const app = express();
const db = require('./database/connection');


db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


app.use(express.json());
app.use(cors());

require('./routes/product.route')(app);

app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}...`);
});