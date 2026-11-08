# 🚀 HireLoop – Server Side

**HireLoop** is a modern, scalable, and role-based job portal platform designed to connect job seekers with employers and simplify the recruitment process.

The platform provides a centralized environment where job seekers can discover opportunities, employers can publish job openings and manage applications, and administrators can maintain and manage the entire platform.

This repository contains the backend server of HireLoop, responsible for database operations, API development, user data management, and communication between the client application and MongoDB.

---

## 📌 Project Overview

HireLoop aims to make the recruitment process easier, faster, and more efficient through a role-based system with three primary user roles.

### 👥 User Roles

**1. Job Seeker (Seeker)**

Job seekers can:
- Create an account and manage their profiles.
- Browse and search for available jobs.
- View detailed job information.
- Apply for suitable job opportunities.
- Track their submitted applications.
- Manage their application history.

**2. Employer (Recruiter)**

Employers can:
- Create and manage employer accounts.
- Create and publish job postings.
- Update and delete their job listings.
- View applications submitted by candidates.
- Review applicant information.
- Manage the recruitment process.

**3. Administrator (Admin)**

Administrators are responsible for:
- Managing registered users.
- Monitoring job postings.
- Managing job seekers and employers.
- Overseeing job applications.
- Maintaining platform security.
- Managing overall platform activities.

---

## 🛠️ Technologies Used

The backend is built using modern JavaScript technologies and database tools.

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework and REST API development |
| MongoDB Atlas | Cloud-based NoSQL database |
| MongoDB Node.js Driver | Database connectivity and operations |
| Better Auth | Authentication and session management |
| CORS | Cross-Origin Resource Sharing |
| dotenv | Environment variable management |
| JavaScript (ES Modules) | Backend development |

---

## 🏗️ Backend Architecture

The backend follows a structured client-server architecture.

```text
                 HireLoop Client
                  (Next.js)
                      |
                      |
                HTTP Requests
                      |
                      ▼
              Express.js Server
                 (Port 5000)
                      |
             -------------------
             |                 |
             ▼                 ▼
         API Routes         Middleware
             |                 |
             -------------------
                      |
                      ▼
                 MongoDB Driver
                      |
                      ▼
                 MongoDB Atlas
                   Database
                   (hireloop)
```

---

## 🗄️ Database Configuration

HireLoop uses MongoDB Atlas as its primary database.

**Database Name:**

`hireloop`

**Current Collection:**

- `user` – Stores user information managed by the authentication system.

Additional collections can be introduced as the platform grows:

- `jobs` – Job postings.
- `applications` – Job application records.
- `companies` – Employer and company information.
- `notifications` – User notifications.

---

## 🔐 Authentication & Authorization

HireLoop uses Better Auth for authentication and user session management.

Authentication features include:

- Email and password authentication.
- User registration and login.
- Session management.
- Role-based user registration.
- MongoDB integration through the Better Auth MongoDB adapter.

The platform is designed around three primary roles:

- `seeker`
- `employer`
- `admin`

Role-based authorization will ensure that users can only access resources and perform actions permitted by their assigned roles.

---

## 📂 Project Structure

```text
hireloop-server/
│
├── node_modules/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
│
└── server.js
```

As the backend expands, the project can follow a modular structure:

```text
hireloop-server/
│
├── config/
│   └── mongodb.js
│
├── routes/
│   ├── userRoutes.js
│   ├── jobRoutes.js
│   ├── applicationRoutes.js
│   └── adminRoutes.js
│
├── controllers/
│   ├── userController.js
│   ├── jobController.js
│   └── applicationController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── .env
├── .gitignore
├── package.json
└── server.js
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory of the server project.

```env
PORT=5000

DB_USER=your_mongodb_username
DB_PASSWORD=your_mongodb_password
```

**Important:** Never expose MongoDB credentials or other sensitive environment variables in the client-side application or public repositories.

---

## 🚀 Installation & Setup

Follow these steps to run the backend server locally.

**1. Clone the repository**

```bash
git clone YOUR_REPOSITORY_URL
```

**2. Navigate to the server directory**

```bash
cd hireloop-server
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create your `.env` file and add your MongoDB credentials.

**5. Start the server**

```bash
node server.js
```

If you have configured a development script in `package.json`, you can also use:

```bash
npm run dev
```

**6. Verify the server**

Open your browser and visit:

```text
http://localhost:5000
```

Expected response:

```text
Hire loop server is running.......!
```

---

## 🌐 API Endpoints

### User APIs

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Check server status |
| GET | `/users` | Retrieve all user records |

**Example: Get All Users**

```http
GET http://localhost:5000/users
```

This endpoint retrieves user records from the MongoDB `user` collection.

**Note:** The current users endpoint is a basic development endpoint. Authentication, authorization, and sensitive-field filtering should be implemented before exposing user data in production.

---

## 🔮 Future Development Plans

HireLoop is designed to grow into a complete recruitment management platform.

Planned features include:

- Complete Job Management System.
- Advanced Job Search and Filtering.
- Job Application Management.
- Employer Dashboard.
- Job Seeker Dashboard.
- Admin Dashboard.
- Role-Based Access Control (RBAC).
- Application Status Tracking.
- Company Profile Management.
- Secure API Authorization.
- Notifications and Application Updates.
- Pagination and Optimized Database Queries.
- Improved API Error Handling and Validation.

---

## 🔒 Security Considerations

Security is an important part of HireLoop's backend architecture.

Planned security improvements include:

- Secure authentication and authorization.
- Role-based API access.
- Protected administrative routes.
- Environment-based configuration.
- Input validation and sanitization.
- Proper error handling.
- Protection of sensitive user information.
- Restricted access to user and application data.

---

## 🎯 Project Goal

The main goal of HireLoop is to build a reliable, scalable, and user-friendly recruitment platform that connects job seekers and employers while providing administrators with complete platform management capabilities.

By combining modern web technologies with a structured backend architecture, HireLoop aims to create a better and more efficient hiring experience.

---

## 👨‍💻 Developer

**HireLoop – Server Side**

Built with ❤️ using Node.js, Express.js, MongoDB Atlas, and Better Auth.

**Project:** HireLoop  
**Category:** Full-Stack Job Portal & Recruitment Platform  
**Backend:** Node.js + Express.js  
**Database:** MongoDB Atlas

