const route = require('express').Router();

const bookList = [
  {
    id:1,
    nama: 'think grow and rich',
    author: 'Napoleon Hill',
    published: 2018,
  },
  {
    id:2,
    nama: 'psychology of money',
    author: 'Morgan Housel',
    published: 2018,
  },
  {
    id: 3,
    nama: 'rich dad poor dar',
    author: 'robert kiyosaki',
    published: 2018,
  },
];

route.get('/', function (req, res) {
  res.render('./pages/index', { bookList });
});
route.get('/about', function (req, res) {
  res.render('./pages/about');
});
route.get('/detail', function (req, res) {
  res.render('./pages/detail', {bookList});
});

module.exports = route;
