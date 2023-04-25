const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const port = 3000;
const router = require('./routes/book.routes');
const { bookModel } = require('./models/book.model');

require('./db/database');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

const server = http.createServer(app);

app.use('/books', router);
server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
