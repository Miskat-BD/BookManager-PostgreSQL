const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
require('dotenv').config()
const cors = require('cors');
const port = 8000;

const pool = require("./db")
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/books", async (req, res) => {
    try {
        const books = await pool.query("SELECT * FROM book")
        res.status(200).json({
            message: "Data is Returned",
            data: books.rows
        })
    } catch (error) {
        res.json({
            error: error.message,
            message: "Book Table Data is not return"
        })
    }
})

app.get("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await pool.query("SELECT * FROM book WHERE id=$1", [id])
        res.json({
            message: "Specific Book is Returned",
            data: book.rows
        })
    } catch (error) {
        res.json({
            error: error.message,
            message: "Specific Book Data is not return"
        })
    }
})

app.post("/books", async (req, res) => {
    try {
        const { name, description } = req.body
        const id = uuidv4();
        // inserting book data into database
        const newBook = await pool.query("INSERT INTO book (id, name, description) VALUES ($1, $2, $3) RETURNING *", [
            id, name, description
        ])
        res.status(201).json({
            message: `Books was Created`,
            data: newBook.rows
        })
    } catch (error) {
        res.json({
            data: error,
            message: "Data doesn't Created"
        })
    }
})

app.patch("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, description } = req.body
        const book = await pool.query("UPDATE book SET name=COALESCE($1, name), description=COALESCE($2, description) WHERE id=$3 RETURNING *", [name, description, id])
        res.json({
            message: "Data is Updated",
            data: book.rows
        })
    } catch (error) {
        res.json({
            data: error,
            message: "Data doesn't Updated"
        })
    }
})

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params
        const book = await pool.query("DELETE FROM book WHERE id=$1", [id])
        res.json({
            message: "Data is Deleted",
            data: book.rows
        })
    } catch (error) {
        res.json({
            data: error,
            message: "Data doesn't Deleted"
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})