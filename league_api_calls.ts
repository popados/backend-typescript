// import express, { request, response } from "express";
const express = require('express')

interface User {
  id: number;
  name: string;
}

const app = express();

let users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/users", (req: Request, res: Response) => {
  res.json();
});

app.listen(3000, () => {
  console.log("Server listening on port 3000. Go to https://localhost:3000/");
});