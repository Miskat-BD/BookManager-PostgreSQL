# BookShelf Backend 📚

A simple RESTful API for managing books, built with **Node.js, Express.js, and PostgreSQL**.

This project demonstrates basic CRUD operations using PostgreSQL as the database and Express.js as the backend framework.

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
* PostgreSQL `pg` library
* UUID
* CORS
* dotenv
* Nodemon

## 📁 Project Structure

```text
BookShelf-Backend/
│
├── db.js
├── index.js
├── package.json
├── package-lock.json
├── .env
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd BookShelf-Backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
PORT=8000
```

Add your PostgreSQL database connection information according to your local or hosted database setup.

> Never commit your `.env` file or database password to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The server will run on:

```text
http://localhost:8000
```

## 📌 API Endpoints

### Get all books

```http
GET /books
```

Returns all books from the database.

### Get a single book

```http
GET /books/:id
```

Returns a specific book using its ID.

### Create a book

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

### Update a book

```http
PATCH /books/:id
```

You can update only the field you need.

Example:

```json
{
  "description": "Updated book description"
}
```

### Delete a book

```http
DELETE /books/:id
```

Deletes a book using its ID.

## 🗄️ Database

The project uses PostgreSQL with a `book` table.

Example table structure:

```sql
CREATE TABLE book (
    id VARCHAR(20) PRIMARY KEY,
    name CHAR(30),
    description VARCHAR(255)
);
```

## 🧪 API Testing

The API can be tested using tools such as:

* Postman
* Thunder Client
* Insomnia

## 🔮 Future Improvements

* Add authentication and authorization
* Add pagination
* Add search functionality
* Add input validation
* Add better error handling
* Connect with a React/Next.js frontend
* Deploy the backend and PostgreSQL database

## 👨‍💻 Author

**Miskat Bin Habib**

Full Stack Developer
