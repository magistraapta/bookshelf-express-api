const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const db = require('./models');

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

require('./routes/book.routes')(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
