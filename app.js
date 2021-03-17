require('dotenv/config');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express'); //npm install express

const cors = require('cors'); //npm i cors
const app = express();
const db = require('./database/connection');
const fileUpload = require('express-fileupload');


db
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(fileUpload({
    createParentPath: true
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// require('./routes/*.js')(app);
require('./routes/user.route')(app);
require('./routes/access.route')(app);
require('./routes/product.route')(app);
require('./routes/file.route')(app);
require('./routes/folder.route')(app);
require('./routes/productfile.route')(app);

app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}...`);
});