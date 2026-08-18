# BookManager Backend 📚

A simple RESTful API for managing books, built with **Node.js, Express.js, and PostgreSQL**.

This project demonstrates how to build a backend application with PostgreSQL and perform basic CRUD operations through RESTful APIs.

## 🚀 Features

* Get all books
* Get a single book by ID
* Add a new book
* Update book information
* Delete a book
* PostgreSQL database integration
* RESTful API
* CORS enabled
* JSON request/response handling

## 🛠️ Technologies Used

* Node.js
* Express.js
* PostgreSQL
* pg
* UUID
* CORS
* dotenv
* Nodemon

## 📁 Project Structure

```text
BookManager/
│
├── db.js
├── index.js
├── package.json
├── package-lock.json
├── .env
├── .gitignore
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git https://github.com/Miskat-BD/BookManager-PostgreSQL.git
```

### 2. Go to the project directory

```bash
cd BookManager
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_postgresql_connection_string
PORT=8000
```

> Never commit your `.env` file or database credentials to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:8000
```

## 📌 API Endpoints

### Get All Books

```http
GET /books
```

Returns all books from the database.

### Get a Single Book

```http
GET /books/:id
```

Returns a specific book by its ID.

### Create a Book

```http
POST /books
```

Request body:

```json
{
  "name": "The Great Gatsby",
  "description": "A classic American novel"
}
```

### Update a Book

```http
PATCH /books/:id
```

You can update only the fields you want to change.

Example:

```json
{
  "description": "Updated book description"
}
```

### Delete a Book

```http
DELETE /books/:id
```

Deletes a book by its ID.

## 🗄️ Database

This project uses **PostgreSQL** as the database.

The `book` table contains:

* `id`
* `name`
* `description`

Example:

```sql
CREATE TABLE book (
    id VARCHAR(20) PRIMARY KEY,
    name CHAR(30),
    description VARCHAR(255)
);
```

## 🧪 API Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia

## 🔮 Future Improvements

* Connect with a React/Next.js frontend
* Add authentication and authorization
* Add search and filtering
* Add pagination
* Add input validation
* Improve error handling
* Deploy the backend

