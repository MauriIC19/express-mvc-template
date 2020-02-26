const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const notFound = require('./middleware/notFound');
const cors = require('./middleware/cors');
const app = express();

const admin = require("./routes/admin_routes");

app.use(cors);
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//Routes
app.use("/", admin);
app.use(notFound);

app.listen(3000, () => {
    console.log("Server is running...");
});