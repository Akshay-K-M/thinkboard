# Thinkboard - Note Taking Application

## Overview
- Note taking application built using MERN stack. 
- Create, update and delete notes.
- Built and tested REST API using Postman.
- Implemented rate limiting using Upstash Redis.
- Responsive UI.
- Deployed at https://thinkboard-p3mp.onrender.com/

## Technologies Used
### Frontend:
- React – UI library for building interactive interfaces
- Vite – Fast build tool and development server
- Javascript – Interactive web interfaces
- Tailwind CSS – Modern styling
- DaisyUI – Tailwind CSS component plugin for UI elements
- React Router – Client-side routing 
- Axios – Promise-based HTTP client for making API requests
- React Hot Toast – Notification library 
- Lucide React – Icon library for React

### Backend:
- Node.js – JavaScript runtime environment
- Express – Minimalist web framework for REST APIs
- Mongoose – MongoDB object modeling for schema enforcement
- Upstash Redis & Rate Limit – Redis-powered rate limiting middleware
- Dotenv – Environment variable management
- CORS – Cross-Origin Resource Sharing middleware
- Nodemon – Dev tool to auto-restart server on file changes

## REST API:
- GET /api/notes/: Retrieves all notes from the database, sorted with the newest first.
- GET /api/notes/:id: Fetches a specific note by its unique ID. Returns 404 if the note does not exist.
- POST /api/notes/: Creates a new note with title and content provided in the request body. Returns the created note.
- PUT /api/notes/:id: Updates the note identified by ID with new title and content. Returns the updated note or 404 if not found.
- DELETE /api/notes/:id: Deletes the note by its ID. Returns the deleted note or 404 if not found.

## Pages:
- /: Home page displaying a list of all notes. Uses GET request.
- /create: Page to create a new note with a form capturing title and content. Validates inputs, handles submission with API POST, shows loading and error/success toast notifications, and navigates back on success.
- /note/:id: Detailed view for a single note identified by URL id param. Fetches note data on mount, allows editing the title and content, saving changes with API PUT, and deleting the note with API DELETE.

## Prerequisites
- Node.js 18+
- MongoDB 8.0+ database instance (cloud or local)
- Upstash Redis account with REST URL and Token for rate limiting
- npm (node package manager)

## .env Setup
### Backend (`/backend`)
```
MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development
```
##  Run the Backend
```
cd backend
npm install
npm run dev
```
##  Run the Frontend
```
cd frontend
npm install
npm run dev
```
