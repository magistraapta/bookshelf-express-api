const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const db = require('./db/database');
const mongoose = require('mongoose');

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);

//koneksi database
db.mongoose
  .connect(db.url)
  .then(console.log('berhasil terhubung ke database'))
  .catch((err) => {
    console.log(err.message);
    process(exit);
  });

const dbUrl = 'mongodb://localhost:27017/express-api';

mongoose.Promise;
mongoose.connect(dbUrl);
mongoose.connection.on('error', (error) => console.log(error));

require('./routes/book.routes')(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
