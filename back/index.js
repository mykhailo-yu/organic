import express from "express";
import mysql from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "organick",
});

app.get("/products", (req, res) => {
  const { discount, category, id } = req.query;
  let q = "Select * from products where 1";
  if (category) {
    q += ` And productCategory = "${category}"`;
  }
  if (discount) {
    q += " Order by productPriceNew desc";
  }
  if (id) {
    q += ` And productId In (${id})`;
  }
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/orders", (req, res) => {
  let q = "Select * from orders";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.get("/order", (req, res) => {
  const orderId = req.query.id;
  let q = `Select orderdetails.*, products.productName From orderdetails Join products On orderdetails.productId = products.productId Where orderdetails.orderId = '${orderId}'`;
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});
app.post("/send", (req, res) => {
  const {
    name,
    email,
    adress,
    tel,
    comment,
    products,
    price,
    discount,
    quantity,
  } = req.body;
  const insertOrdersQuery =
    "Insert into orders (orderUserName, orderUserEmail, orderUserPhone, orderAdress, orderPrice, orderDiscount, orderComment) Values (?)";
  db.query(
    insertOrdersQuery,
    [[name, email, tel, adress, price, discount, comment]],
    (err, data) => {
      if (err) return res.json(err);
      const orderId = data.insertId;
      const insertOrdersQuery =
        "Insert Into orderdetails (orderId, productId, productQuantity, productPrice, productPriceNew) Values ?";
      const itemsValues = JSON.parse(products).map((item) => [
        orderId,
        item.productId,
        JSON.parse(quantity)[item.productId],
        item.productPrice,
        item.productPriceNew,
      ]);
      db.query(insertOrdersQuery, [itemsValues], (err, res) => {
        if (err) return res.json(err);
      });
      return res.json(data);
    }
  );
  res.statusCode = 302;
  res.setHeader("Location", "http://localhost:3000/thankYou");
});

app.listen(8000, () => {
  console.log("Server is ok!");
});
