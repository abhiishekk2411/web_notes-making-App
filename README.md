# Task Notes 📝

A minimal, file-based note-taking web app built with Node.js, Express, and EJS. Notes are stored as plain `.txt` files on the server — no database required.

## Features

- Create notes with a title and details
- Notes persist as `.txt` files inside `files/`
- View all notes on the homepage
- Open any note to read its full content
- Dark, circuit-trace themed UI styled with Tailwind CSS

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Storage:** Node `fs` module (file system as storage — no DB)
- **Styling:** Tailwind CSS (CDN)
- **Dev tool:** nodemon

## Project Structure

```
web_notes_making/
├── files/                # notes stored as .txt files
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
├── views/
│   ├── index.ejs         # homepage — form + notes list
│   └── show.ejs          # single note view
├── index.js               # Express server & routes
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14+) installed

### Installation

```bash
git clone <your-repo-url>
cd web_notes_making
npm install
```

### Run the app

```bash
npx nodemon
```

Or without nodemon:

```bash
node index.js
```

App runs at: `http://localhost:3000`

## Routes

| Method | Route              | Description                       |
|--------|--------------------|------------------------------------|
| GET    | `/`                | Homepage — lists all notes         |
| POST   | `/create`          | Creates a new note (`.txt` file)   |
| GET    | `/files/:filename` | Opens a single note                |

## How It Works

1. Homepage reads the `files/` directory and lists every saved note.
2. Submitting the form writes a new `.txt` file named after the title.
3. Clicking **Read More** opens that file's content via a dynamic route (`/files/:filename`).

## Future Improvements

- [ ] Edit / delete notes
- [ ] Search notes by title
- [ ] Move from flat files to a database (MongoDB)
- [ ] User authentication for private notes

## Author

**Abhishek** — [GitHub](https://github.com/abhiishekk2411)
