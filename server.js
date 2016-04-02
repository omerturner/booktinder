var express              = require("express"),
      app                    = express(),
      bodyParser        = require('body-parser'),
      mongoose         = require('mongoose'),
      booksController = require('./server/controller/books-controller');

mongoose.connect('mongodb://localhost:27017/bookTinder');



app.use(express.static(__dirname + "/src"));
app.use(bodyParser.json());

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send('Page Not Found');
  res.status(500).send('Something is broken');
});


//REST API
app.get('/api/books/get', booksController.getBooks);

app.post('/api/books/insert', booksController.insert);

app.post('/api/books/update/like', booksController.updateLike);

app.post('/api/books/update/unlike', booksController.updateUnLike);

app.post('/api/books/update/notread', booksController.updateNotRead);


//Serve Static
app.get('/*', function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});

app.listen(3000);
console.log("Server running on port 3000");