# Notes App Backend

A secure Notes App REST API built using Node.js, Express.js, MongoDB, and JWT authentication.

## Features

- User registration and login
- Password hashing using bcryptjs
- JWT-based authentication
- Create, read, update, and delete notes
- Protected note routes
- Users can access only their own notes
- MongoDB database integration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken
- dotenv

## Project Structure

```text
notes-app-backend/
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── Note.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── noteRoutes.js
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation

1. Clone the repository.
2. Open this project folder in the terminal.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file using `.env.example` as a reference.
5. Add your MongoDB connection string and JWT secret to `.env`.
6. Start the development server:

```bash
npm run dev
```

Server runs at `http://localhost:5002`.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a user |
| POST | `/api/auth/login` | Login and receive JWT |

### Notes

All note endpoints require a valid Bearer token.

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/notes` | Create a note |
| GET | `/api/notes` | Get all user's notes |
| GET | `/api/notes/:id` | Get a single note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

## Authentication

After login, copy the JWT token and add it in Postman:

**Authorization → Bearer Token**

## Testing

All authentication and note CRUD endpoints were tested successfully using Postman, including access denial when a token is missing.

## Author

Yashvi Vasani