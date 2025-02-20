# EduBook

## Overview
EduBook is a platform designed to help students and professionals learn Web3 & Blockchain through a structured roadmap, mentorship, and resource sharing.

## Tech Stack
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js (Vite)
- **Blockchain**: Solana, Web3.js

## Folder Structure
```
edubook-mvp/
├── backend/ (Node.js + Express API)
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── .env
├── frontend/ (React.js UI)
│   ├── src/
│   ├── public/
│   ├── package.json
├── README.md
├── package.json (Root)
```

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/edubook-mvp.git
cd edubook-mvp
```

### 2. Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file and add your MongoDB connection string:
  ```
  MONGO_URI=your_mongodb_connection_string
  ```
- Start the backend server:
  ```bash
  node server.js
  ```

### 3. Frontend Setup
```bash
cd frontend
npm install
npm start
```

### 4. Blockchain Integration (Solana)
- Ensure you are connected to the Solana Devnet.
- Modify `frontend/src/utils/solana.js` for Solana account interactions.

## API Routes
### Sample Route
- **GET /** → Returns API running message
- More routes will be added for user authentication, roadmap access, and mentorship scheduling.

## Future Enhancements
- Implement Authentication (JWT)
- User Profiles & Learning Paths
- Community Forum & Mentorship Matching
- Smart Contract Deployments

## Contributors
- **Ghanshyam Singh** (Project Lead)
- Open for contributions! Fork & submit PRs.

## License
This project is licensed under the MIT License.
