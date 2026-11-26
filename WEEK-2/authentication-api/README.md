# User Authentication API

A REST API built using Node.js, Express.js, and MongoDB. It provides user registration, login, password hashing, and JWT-based authentication.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- JSON Web Token (JWT)
- dotenv

## Features

- User registration
- User login
- Password hashing using bcrypt
- JWT token generation
- Protected profile route
- Input validation
- MongoDB database integration

## Project Structure

```text
authentication-api/
├── config/
│   └── db.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Installation

1. Clone or download the project.
2. Open the project folder in the terminal.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file using `.env.example` as a reference.
5. Add your MongoDB connection URL and JWT secret.

## Run the Project

```bash
npm run dev
```

The server runs at:

`http://localhost:5001`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and generate JWT |
| GET | `/api/auth/profile` | Get protected user profile |

## Testing with Postman

### Register User

`POST /api/auth/register`

```json
{
  "name": "Yashvi",
  "email": "yashvi@example.com",
  "password": "StrongPass123"
}
```

### Login User

`POST /api/auth/login`

```json
{
  "email": "yashvi@example.com",
  "password": "StrongPass123"
}
```

The response contains a JWT token.

### Get User Profile

`GET /api/auth/profile`

Select **Authorization → Bearer Token** in Postman and paste the login token.

## Security

- Passwords are hashed using bcryptjs.
- JWT tokens are used to protect routes.
- Password hashes are excluded from normal user queries.
- Environment variables are stored in `.env`.
- `.env` is excluded from Git.

## Learning Outcomes

- Understanding REST API development.
- Implementing user registration and login.
- Password hashing and verification.
- JWT-based authentication.
- Connecting Express.js with MongoDB.
- Testing APIs using Postman.