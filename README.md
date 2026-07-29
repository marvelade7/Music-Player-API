# Music Player API

A simple and lightweight REST API built with Node.js and Express to serve music metadata, cover images, and audio files. This backend is ideal for a music player frontend application.

## Features

- **Fetch All Songs:** Retrieve a comprehensive list of available songs along with their metadata.
- **Fetch Song by ID:** Retrieve specific details for a single song using its unique ID.
- **Static File Serving:** Serves audio files (`.mp3`) and cover images (`.jpg`) directly from the server.
- **CORS Enabled:** Ready to be consumed by frontend applications running on different ports or domains.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

## Installation & Setup

1. **Clone the repository or navigate to the project directory:**

   ```bash
   cd "Music Player API"
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Environment Variables:**

   Create a `.env` file in the root directory and configure the following variables. If you don't provide them, the app will default to port `1213` and `http://localhost:1213`.

   ```env
   PORT=1213
   BASE_URL=http://localhost:1213
   ```

4. **Start the server:**

   ```bash
   node index.js
   ```
   *The server will start running on `http://localhost:1213`.*

## API Endpoints

### 1. Get All Music

- **URL:** `/api/music`
- **Method:** `GET`
- **Description:** Retrieves an array of all available songs.

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "Jugular Jugular",
    "artist": "Lawrence Oyor ft Greatman Takit",
    "duration": "4:35",
    "image": "http://localhost:1213/images/jugular-jugular.jpg",
    "audio": "http://localhost:1213/music/Jugular_Jugular.mp3"
  }
]
```

### 2. Get Music by ID

- **URL:** `/api/music/:id`
- **Method:** `GET`
- **Description:** Retrieves the details of a specific song by its ID.

**Response Example (Success):**
```json
{
  "id": 1,
  "name": "Jugular Jugular",
  "artist": "Lawrence Oyor ft Greatman Takit",
  "duration": "4:35",
  "image": "http://localhost:1213/images/jugular-jugular.jpg",
  "audio": "http://localhost:1213/music/Jugular_Jugular.mp3"
}
```

**Response Example (Error - 404):**
```json
{
  "message": "Song not found"
}
```

## Folder Structure

To serve static files correctly, ensure your project has the following directory structure:

```
.
├── public/
│   ├── images/      # Store all your .jpg cover images here
│   └── music/       # Store all your .mp3 audio files here
├── .env             # Environment variables
├── index.js         # Main server file
├── package.json     # Project dependencies
└── README.md        # This documentation
```

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
