// import express, { request, response } from "express";
var express = require('express');
var app = express();
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
app.get("/users", function (req, res) {
    res.json();
});
app.listen(3000, function () {
    console.log("Server listening on port 3000. Go to https://localhost:3000/");
});
