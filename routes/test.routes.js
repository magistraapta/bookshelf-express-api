const route = require('express').Router();

const bookList = [
  {
    id: 1,
    name: 'Think Grow and Rich',
    author: 'Napoleon Hill',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis rerum incidunt odit, omnis quaerat officiis voluptatibus hic tempore qui aspernatur est iure sint fugit assumenda ab! Quis at corrupti error quo tempore et sapiente similique consectetur id, quas nostrum unde odio reiciendis repellendus incidunt voluptas! Alias quod, distinctio voluptates laboriosam expedita beatae quasi adipisci? Modi, aperiam ab. Nostrum ea quae odit inventore, rerum voluptates rem cupiditate illo provident illum natus saepe quam temporibus hic ex, consequuntur dolores ipsam eveniet laborum earum. Veniam, cupiditate! Possimus vero quam itaque accusantium totam quo ab, maxime minus ratione incidunt ex, nam impedit vel cumque a soluta quidem sit vitae. Quas esse quam aliquam mollitia est odio, ullam at, necessitatibus quibusdam cumque ipsam reprehenderit autem corrupti ut accusamus quaerat totam, laboriosam maiores? Tempore molestias reprehenderit nisi, at fugit cumque eum. Eos sapiente illum dolorum adipisci consequuntur animi obcaecati ipsam laborum minus expedita, quod numquam incidunt excepturi earum doloremque recusandae itaque. Eius perferendis voluptatem nulla veritatis alias omnis unde illo dolore modi perspiciatis dolores, culpa molestiae? Accusantium reprehenderit natus soluta. Repellat, quis dolores deleniti, suscipit quibusdam exercitationem velit cumque enim laudantium sed illum rerum pariatur culpa. Maiores iste cum maxime eveniet commodi similique porro fugit',
  },
  {
    id: 2,
    name: 'Psychology of Money',
    author: 'Morgan Housel',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis rerum incidunt odit, omnis quaerat officiis voluptatibus hic tempore qui aspernatur est iure sint fugit assumenda ab! Quis at corrupti error quo tempore et sapiente similique consectetur id, quas nostrum unde odio reiciendis repellendus incidunt voluptas! Alias quod, distinctio voluptates laboriosam expedita beatae quasi adipisci? Modi, aperiam ab. Nostrum ea quae odit inventore, rerum voluptates rem cupiditate illo provident illum natus saepe quam temporibus hic ex, consequuntur dolores ipsam eveniet laborum earum. Veniam, cupiditate! Possimus vero quam itaque accusantium totam quo ab, maxime minus ratione incidunt ex, nam impedit vel cumque a soluta quidem sit vitae. Quas esse quam aliquam mollitia est odio, ullam at, necessitatibus quibusdam cumque ipsam reprehenderit autem corrupti ut accusamus quaerat totam, laboriosam maiores? Tempore molestias reprehenderit nisi, at fugit cumque eum. Eos sapiente illum dolorum adipisci consequuntur animi obcaecati ipsam laborum minus expedita, quod numquam incidunt excepturi earum doloremque recusandae itaque. Eius perferendis voluptatem nulla veritatis alias omnis unde illo dolore modi perspiciatis dolores, culpa molestiae? Accusantium reprehenderit natus soluta. Repellat, quis dolores deleniti, suscipit quibusdam exercitationem velit cumque enim laudantium sed illum rerum pariatur culpa. Maiores iste cum maxime eveniet commodi similique porro fugit',
  },
  {
    id: 3,
    name: 'Rich Dad Poor Dad',
    author: 'robert kiyosaki',
    summary:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis rerum incidunt odit, omnis quaerat officiis voluptatibus hic tempore qui aspernatur est iure sint fugit assumenda ab! Quis at corrupti error quo tempore et sapiente similique consectetur id, quas nostrum unde odio reiciendis repellendus incidunt voluptas! Alias quod, distinctio voluptates laboriosam expedita beatae quasi adipisci? Modi, aperiam ab. Nostrum ea quae odit inventore, rerum voluptates rem cupiditate illo provident illum natus saepe quam temporibus hic ex, consequuntur dolores ipsam eveniet laborum earum. Veniam, cupiditate! Possimus vero quam itaque accusantium totam quo ab, maxime minus ratione incidunt ex, nam impedit vel cumque a soluta quidem sit vitae. Quas esse quam aliquam mollitia est odio, ullam at, necessitatibus quibusdam cumque ipsam reprehenderit autem corrupti ut accusamus quaerat totam, laboriosam maiores? Tempore molestias reprehenderit nisi, at fugit cumque eum. Eos sapiente illum dolorum adipisci consequuntur animi obcaecati ipsam laborum minus expedita, quod numquam incidunt excepturi earum doloremque recusandae itaque. Eius perferendis voluptatem nulla veritatis alias omnis unde illo dolore modi perspiciatis dolores, culpa molestiae? Accusantium reprehenderit natus soluta. Repellat, quis dolores deleniti, suscipit quibusdam exercitationem velit cumque enim laudantium sed illum rerum pariatur culpa. Maiores iste cum maxime eveniet commodi similique porro fugit',
  },
];

route.get('/', function (req, res) {
  const title = 'home';
  res.render('./pages/index', { bookList, title });
});
route.get('/about', function (req, res) {
  const title = 'about';
  res.render('./pages/about', { title });
});
route.get('/detail/:id', function (req, res) {
  const id = +req.params.id;
  const book = bookList.find((book) => book.id === id);
  if (!book) {
    const title = 'Book not found'
    res.render('./pages/error', {title});
  }
  res.render('./pages/detail', { book });
});

module.exports = route;
