const express = require("express");

const app = express();
const PORT = 3000;

const users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];

app.get("/", (req, res, next) => {
  res.send("Hi, there!");
});

app.get("/express", (req, res, next) => {
  res.send(
    "Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült."
  );
});

app.get("/greeting", (req, res, next) => {
  res.send("Hello,  Antal Bence  ");
});

app.get("/nodejs", (req, res, next) => {
  res.send(
    "A Node.js egy olyan szerveroldali JavaScript futtatókörnyezet, amely a V8 JavaScript motorra épül."
  );
});

app.get("/index", (req, res, next) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users.find((userInput) => userInput.id === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: "User not found!" });
  }
});

app.post("/api/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "You must provide a name for a new user!" });
  }

  const newUser = {
    id: (users.length + 1).toString(),
    name: name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.put("/api/users/:id", (req, res) => {
  // Felhasználó szerkesztése, Sikeres kérés esetén 200-as státuszkód
});

app.delete("/api/users/:id", (req, res) => {
  // Felhasználó törlése, Sikeres kérés esetén 204-es státuszkód
});

app.listen(PORT, () => {
  console.log(`server listens on port http://localhost:${PORT}`);
});
