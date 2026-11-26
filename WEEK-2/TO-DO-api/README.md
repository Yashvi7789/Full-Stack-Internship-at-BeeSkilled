# To-Do REST API

A RESTful API built using Node.js, Express.js, MongoDB, and Mongoose to manage daily tasks.

## Features

- Create a new task
- Get all tasks
- Get a single task by ID
- Update an existing task
- Delete a task
- Input validation and error handling
- Automatic timestamps
- MongoDB database integration

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Project Structure

```text
TO-DO-api/
│
├── models/
│   └── Task.js
│
├── routes/
│   └── taskRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation and Setup

1. Clone the repository.
2. Open the project folder in the terminal.
3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/todo_db
```

5. Start the development server:

```bash
npm run dev
```

The API runs at:

`http://localhost:5000`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check API status |
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a task by ID |
| POST | `/api/tasks` | Create a task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Sample Request

**POST** `/api/tasks`

```json
{
  "title": "Complete Internship Assignment",
  "description": "Build a To-Do REST API",
  "completed": false
}
```

## Testing

All API endpoints can be tested using Postman.

## Author

Yashvi Vasani
