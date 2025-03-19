# GetItDone ✅

A sleek, modern task management application built with the MERN stack (MongoDB, Express.js, React, Node.js) and enhanced with Tailwind CSS for styling.

## ✨ Features

- **User Authentication** - Secure login and registration using JWT
- **Create Tasks** - Quickly add new tasks to your list
- **Edit Tasks** - Update task details as your needs change
- **Delete Tasks** - Remove completed or unnecessary tasks
- **Search Functionality** - Easily find specific tasks with the search feature
- **Responsive Design** - Seamless experience across desktop and mobile devices

## 🛠️ Technologies Used

### Frontend
- **React** - Building user interfaces with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Axios** - Promise-based HTTP client for API requests

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework for Node.js
- **MongoDB** - NoSQL database for storing task and user data
- **JSON Web Token (JWT)** - Secure authentication implementation

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rahuldewangan05/GetItDone.git
   cd GetItDone
   ```

2. **Set up the backend**
   ```bash
   # Navigate to the server directory
   cd server

   # Install dependencies
   npm install

   # Create a .env file with the following variables
   # PORT=5000
   # MONGODB_URI=your_mongodb_connection_string
   # JWT_SECRET=your_jwt_secret

   # Start the server
   npm start
   ```

3. **Set up the frontend**
   ```bash
   # In a new terminal, navigate to the client directory
   cd client

   # Install dependencies
   npm install

   # Start the React application
   npm start
   ```

4. **Access the application**
   - Open your browser and navigate to `http://localhost:3000`

## 📸 Screenshots

## 🔧 API Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|--------------|
| POST | /api/auth/register | Register a new user | No |
| POST | /api/auth/login | Login a user | No |
| GET | /api/notes | Get all notes for a user | Yes |
| POST | /api/notes | Create a new note | Yes |
| PUT | /api/notes/:id | Update a note | Yes |
| DELETE | /api/notes/:id | Delete a note | Yes |

## 🧪 Testing

```bash
# Run tests for the backend
cd server
npm test

# Run tests for the frontend
cd client
npm test
```

## 🔄 Future Improvements

- Task categorization and tagging
- Task priority levels
- Due dates and reminders
- Collaborative tasks with sharing capabilities
- Dark mode toggle

## 👨‍💻 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
