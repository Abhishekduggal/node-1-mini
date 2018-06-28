const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const bookCtrl = require("./controllers/booksCtrl");

const app = express();
app.use(bodyParser.json());

app.get("/api/books", bookCtrl.read);
//app.delete("/api/books", bookCtrl.delete);

app.post("/api/books", bookCtrl.create);

app.put("/api/books/:id", bookCtrl.update);

app.delete("/api/books/:id", bookCtrl.delete);

app.listen(port, () => {
  console.log(`List on port: ${port}`);
});
