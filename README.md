# Creator Hub

A **MERN** web application that allows content creators to manage their profile, earn credits, and interact with a personalized feed aggregated from Twitter and Reddit.

---

## Features

- **User Authentication**: Register & login with JWT, role-based access (User, Admin).
- **Credit Points System**: Earn credits for daily login, profile completion, saving content; Admin panel to view & update credits.
- **Feed Aggregator**: Fetch posts from Twitter & Reddit, display in scrollable feed; save, share, report functionality.
- **Dashboard**:

  - User: view credit stats, saved feeds, recent activity.
  - Admin: view site metrics, manage users (add/deduct credits, promote to admin).

- **Caching**: Redis-based cache for feed data (60‑second TTL).
- **Responsive UI**: Built with React & Tailwind CSS.
- **Deployment**: Backend on Google Cloud Run, Frontend on Firebase Hosting.

---

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Cache**: Redis (Redis Cloud)
- **Authentication**: JSON Web Tokens (JWT)
- **Frontend**: React.js, React Router, Tailwind CSS
- **Icons**: lucide-react
- **Hosting**: Google Cloud Run, Firebase Hosting

---

## Prerequisites

- Node.js (v14+)
- npm or yarn
- MongoDB Atlas account
- Redis Cloud account (or local Redis)

---

## Getting Started

### Clone Repository

````bash
git clone https://github.com/your-username/creatorshub.git
cd creatorshub```

### Backend Setup

```bash
cd backend
npm install
create a .env file
node index.js
````

### Frontend Setup

```bash
cd frontend
npm install
create a .env file
npm run dev        # starts Vite dev server
```

---

## Environment Variables

### Backend (`/backend/.env`)

```env
MONGO_URI=<Your MongoDB Atlas connection string>
JWT_SECRET=<Your JWT secret key>
TWITTER_BEARER_TOKEN
ADMIN_SECRET
REDIS_HOST=<Redis host>
REDIS_PORT=<Redis port>
REDIS_USERNAME=<Redis username>
REDIS_PASSWORD=<Redis password>
```

### Frontend (`/frontend/.env`)

````env
VITE_API_URL=http://localhost:5000  # or your deployed API URL\```

---

---

## License
This project is licensed under the **MIT License** © 2025

```
````
