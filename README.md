# PR-11 Employee Management System

<div align="center">

[![Node.js](https://img.shields.io/badge/Node.js-v14%2B-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.2.1-black?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.0.2-brightgreen?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue)](LICENSE)

**An enterprise-grade, role-based Employee Management System with JWT authentication, real-time task tracking, and comprehensive analytics dashboard.**

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [API](#-api-endpoints) • [Architecture](#-architecture) • [Contributing](#-contributing)

</div>

---

## 🔐 Quick Start Credentials

> **⚠️ DEFAULT CREDENTIALS - Change immediately in production!**

| Role | Email | Password |
|------|-------|----------|
| **Admin** | `aamir729039@gmail.com` | `1234` |

---

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [API Endpoints](#-api-endpoints)
- [Database Schemas](#-database-schemas)
- [Architecture](#-architecture)
- [Security](#-security)
- [Performance Optimization](#-performance-optimization)
- [Error Handling](#-error-handling)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Support](#-support)

---

A production-ready, enterprise-grade Employee Management System built with modern Node.js technologies. This application provides comprehensive employee lifecycle management, sophisticated task allocation, real-time progress tracking, and advanced analytics with granular role-based access control.

## 🎯 Features

### Core Functionality
- **👥 Advanced User Management**
  - CRUD operations with validation
  - Role-based access control (RBAC) with three tiers: Admin, Manager, Employee
  - Secure password hashing using bcrypt (salt rounds: 10)
  - Comprehensive user profiles with department and salary tracking
  - User lifecycle management with timestamps

- **📋 Sophisticated Task Management**
  - Full-cycle task lifecycle (Create → Assign → Track → Complete)
  - Multi-status tracking (Pending, In Progress, Completed)
  - Date-based task scheduling and deadline tracking
  - Real-time task status updates
  - Bulk operations support
  - Task history and audit logging

### Security & Authentication
- **🔐 Enterprise-Grade Security**
  - JWT (JSON Web Token) authentication with signed payloads
  - Stateful session management using HTTP-only cookies
  - Password security with bcrypt hashing (cost factor: 10)
  - Protected routes with middleware authorization
  - CORS-ready architecture
  - Input validation and sanitization
  - SQL Injection prevention (NoSQL injection protection)

- **🛡️ Authorization Framework**
  - Fine-grained role-based access control
  - Middleware-based permission checking
  - Token expiration and refresh mechanisms
  - Admin audit trail logging

### User Interface & Experience
- **🎨 Modern Responsive Dashboard**
  - Server-side rendering with EJS templating engine
  - Bootstrap 4+ responsive grid system
  - Mobile-first design approach
  - Real-time data updates with DataTables
  - Interactive calendar for task scheduling
  - Advanced charting with jQuery Flot
  - Notification system with Toastr

### Developer Experience
- **⚡ Development Tools**
  - Hot-reload with nodemon during development
  - Comprehensive error logging
  - Request/Response logging
  - Environment-based configuration management

### Scalability & Performance
- **📊 Optimized for Growth**
  - Indexed MongoDB queries
  - Connection pooling
  - Async/await pattern for non-blocking I/O
  - Efficient data pagination with DataTables

## 🛠️ Tech Stack

### Backend Architecture
| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Runtime** | Node.js (v14+) | JavaScript runtime for server-side execution |
| **Framework** | Express.js 5.2.1 | Lightweight, unopinionated web framework |
| **Database** | MongoDB 4.4+ | NoSQL document-oriented database |
| **ODM** | Mongoose 9.0.2 | Schema validation and data modeling |
| **Authentication** | JWT (jsonwebtoken 9.0.3) | Stateless token-based authentication |
| **Hashing** | bcrypt 6.0.0 | Password hashing with configurable salt rounds |
| **HTTP Client** | Axios 1.13.2 | Promise-based HTTP client for API calls |

### Frontend Stack
| Component | Technology | Purpose |
|-----------|-----------|---------|
| **Template Engine** | EJS 3.1.10 | Server-side templating |
| **CSS Framework** | Bootstrap 4.6+ | Responsive grid system and components |
| **Data Visualization** | DataTables 1.10.16+ | Advanced interactive data tables |
| **Charting** | jQuery Flot | Lightweight charting library |
| **Calendar** | FullCalendar 5+ | Interactive event calendar |
| **Notifications** | Toastr | Non-blocking toast notifications |
| **Date Handling** | Moment.js | Date/time manipulation |
| **Select UI** | Select2 | Enhanced select dropdowns |

### Development & DevOps
| Tool | Version | Purpose |
|------|---------|---------|
| **Auto-Reload** | nodemon 3.1.11 | Automatic restart on file changes |
| **Package Manager** | npm 6+ | Dependency management |
| **Runtime Manager** | Node.js LTS | Long-term support runtime |

### Middleware Stack
- `body-parser`: HTTP request body parsing (URL-encoded, JSON)
- `cookie-parser`: Cookie parsing and management
- `dotenv`: Environment variable management
- `express`: Core routing and middleware

---

## 📁 Project Structure

```
PR_11_Emp_Management_System/
│
├── configs/                          # Configuration layer
│   ├── axiosInstance.js             # Preconfigured Axios instance with defaults
│   ├── database.js                  # MongoDB connection initialization & pooling
│   └── dotenv.js                    # Environment variable parser & validator
│
├── controllers/                      # Business logic & request handlers
│   ├── user.controller.js           # User CRUD, authentication logic
│   │   ├── createUser()             # Hash password, validate input, save to DB
│   │   ├── login()                  # Authenticate, generate JWT, set cookies
│   │   ├── logout()                 # Clear session & cookies
│   │   ├── getAllUser()             # Fetch all users with pagination
│   │   ├── getUser()                # Fetch single user by ID
│   │   ├── updateUser()             # Update user fields with validation
│   │   └── deleteUser()             # Soft/hard delete user
│   │
│   ├── task.controller.js           # Task management operations
│   │   ├── addTaskPage()            # Render task creation form
│   │   ├── addTask()                # Create new task with validation
│   │   ├── viewTask()               # Fetch tasks with filters
│   │   ├── updateTask()             # Update task status/details
│   │   └── deleteTask()             # Remove task from database
│   │
│   └── client.controller.js         # Frontend rendering controllers
│       ├── renderHome()             # Dashboard rendering
│       ├── renderLogin()            # Login page rendering
│       └── renderProfile()          # User profile page
│
├── models/                           # Mongoose schemas & data validation
│   ├── user.model.js                # User schema with pre/post hooks
│   │   ├── Validations: name, email, password, department, salary, role
│   │   └── Indexes: email (unique), role, department
│   │
│   └── task.model.js                # Task schema with workflow states
│       ├── Validations: name, date, description, status
│       └── Indexes: status, date, createdAt
│
├── middlewares/                      # Express middleware functions
│   ├── userAuth.middleware.js       # JWT token verification & validation
│   │   ├── Verify token signature
│   │   ├── Check token expiration
│   │   └── Attach user info to request
│   │
│   └── userRole.middleware.js       # Role-based access control (RBAC)
│       ├── Check user role
│       ├── Verify permissions
│       └── Log access attempts
│
├── routers/                          # API route definitions
│   ├── user.route.js                # User endpoints (auth, CRUD)
│   ├── task.route.js                # Task endpoints (CRUD, status updates)
│   ├── client.route.js              # Frontend routes (page rendering)
│   └── index.js                     # Route aggregator & API versioning
│
├── views/                            # EJS template files
│   ├── index.ejs                    # Main landing page
│   │
│   ├── pages/                       # Feature pages
│   │   ├── login.ejs                # Authentication page
│   │   ├── addTask.ejs              # Task creation form
│   │   ├── viewTask.ejs             # Task listing & management
│   │   ├── addManager.ejs           # Manager account creation
│   │   └── viewManager.ejs          # Manager profile & settings
│   │
│   └── partials/                    # Reusable template components
│       ├── header.ejs               # Navigation & meta tags
│       ├── footer.ejs               # Footer content
│       └── sidebar.ejs              # Navigation sidebar
│
├── public/                           # Static assets (served by Express)
│   ├── assets/                      # Third-party libraries & styles
│   │   ├── extra-libs/
│   │   │   ├── calendar/            # Calendar CSS & JS
│   │   │   ├── DataTables/          # DataTables components
│   │   │   ├── gritter/             # Notification library
│   │   │   ├── multicheck/          # Bulk selection utilities
│   │   │   └── sparkline/           # Chart library
│   │   │
│   │   └── libs/                    # Core libraries
│   │       ├── bootstrap/           # Bootstrap framework
│   │       ├── bootstrap-datepicker/# Date picker component
│   │       ├── chart/               # Chart.js components
│   │       ├── datatables/          # DataTables library
│   │       ├── flot/                # Flot charting
│   │       ├── fullcalendar/        # Full calendar
│   │       ├── jquery/              # jQuery 3.6+
│   │       ├── moment/              # Date manipulation
│   │       ├── select2/             # Enhanced selects
│   │       └── toastr/              # Notifications
│   │
│   ├── images/                      # Image assets
│   │   ├── background/              # Background images
│   │   ├── big/                     # Large images
│   │   └── users/                   # User avatars
│   │
│   ├── css/                         # Custom stylesheets
│   └── js/                          # Custom JavaScript
│
├── .env                             # Environment variables (git-ignored)
├── .gitignore                       # Git ignore rules
├── .envexample                      # Environment variable template
├── index.js                         # Application entry point
├── package.json                     # Project metadata & dependencies
├── package-lock.json               # Dependency lock file
└── README.md                        # Project documentation
```

### Key Directories Explained

**configs/** - Centralized configuration management
- Follows 12-factor app principles
- Database connection pooling
- Reusable Axios instance for API calls

**controllers/** - MVC pattern implementation
- Separation of concerns
- Business logic isolated from routing
- Consistent error handling

**models/** - Data layer abstraction
- Mongoose schema definitions
- Data validation at schema level
- Indexes for query optimization

**middlewares/** - Cross-cutting concerns
- Authentication/Authorization
- Request logging
- Error handling

**routers/** - REST API design
- Resource-based routing
- HTTP verb semantics (GET, POST, PUT, DELETE, PATCH)
- Grouped endpoints for maintainability

## ⚙️ Installation

### System Requirements

```
Node.js     >= 14.0.0    (Recommended: 18 LTS or 20 LTS)
npm         >= 6.0.0     (Recommended: 8+)
MongoDB     >= 4.4       (Local or Atlas cloud)
RAM         >= 512MB     (1GB+ recommended)
Disk Space  >= 500MB     (For dependencies + data)
```

### Platform Support
- ✅ Windows 10/11
- ✅ macOS 10.15+
- ✅ Linux (Ubuntu 18+, Debian 10+, CentOS 7+)

### Step-by-Step Setup

#### 1. Clone/Download Repository
```bash
cd "PR_11 Emp Management System"
```

#### 2. Install Dependencies
```bash
npm install
```

This installs all packages specified in `package.json`:
- Express server framework
- Mongoose MongoDB ODM
- bcrypt for password hashing
- JWT for authentication
- EJS template engine
- And 5+ other production dependencies

#### 3. Environment Configuration

Create a `.env` file in the project root with the following variables:

**Local MongoDB Setup:**
```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URL=mongodb://localhost:27017/employee_management

# JWT Configuration (optional, currently uses 'privateKey' hardcoded)
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Session Configuration
SESSION_SECRET=your_session_secret_key

# CORS Configuration (if needed)
CORS_ORIGIN=http://localhost:3000
```

**MongoDB Atlas Cloud Setup:**
```env
# Server Configuration
PORT=3000
NODE_ENV=production

# Database Configuration (with authentication)
MONGODB_URL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/employee_management?retryWrites=true&w=majority

# Other configurations...
```

**Obtaining MongoDB Atlas Connection String:**
1. Create account at [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a cluster
3. Add user credentials
4. Click "Connect" → "Connect your application"
5. Copy connection string and replace `<username>:<password>`

#### 4. Database Initialization

```bash
# MongoDB will auto-create the database on first connection
# Mongoose will create collections when first document is inserted
```

#### 5. Start the Application

**Development Mode** (with hot-reload):
```bash
npm run dev
```

**Production Mode**:
```bash
npm start
```

#### 6. Access the Application

```
http://localhost:3000
```

---

## ⚙️ Configuration

### Environment Variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `PORT` | No | 3000 | Server port number |
| `MONGODB_URL` | Yes | - | MongoDB connection string |
| `NODE_ENV` | No | development | Execution environment |
| `JWT_SECRET` | No | privateKey | JWT signing secret |
| `JWT_EXPIRE` | No | 7d | Token expiration time |

### Application Configuration Files

#### `configs/dotenv.js`
Loads and validates environment variables:
```javascript
import env from "dotenv";
env.config();

const dotenv = {
    PORT: process.env.PORT || 3000,
    MONGODB_URL: process.env.MONGODB_URL,
}
```

#### `configs/database.js`
MongoDB connection initialization with error handling:
```javascript
import mongoose from "mongoose"
import dotenv from "./dotenv.js";

const db = async () => {
    try {
        await mongoose.connect(dotenv.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ Database connection failed:", error.message);
    }
}
```

#### `configs/axiosInstance.js`
Pre-configured HTTP client for API calls:
```javascript
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add interceptors for auth tokens, logging, etc.
```

### Application Settings (`index.js`)

```javascript
const app = express();

// Body parsing configuration
app.use(bodyParser.urlencoded({ extended: true }));  // Form data
app.use(bodyParser.json());                           // JSON payloads

// Cookie handling
app.use(cookieParser());

// Static files
app.use(express.static('public'));

// Template engine
app.set('view engine', 'ejs');

// Port configuration
const port = dotenv.PORT || 3000;
```

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api
```

### Authentication Endpoints

#### Register New User
```http
POST /user
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "department": "IT",
  "salary": 50000,
  "role": "employee"
}
```

**Response (201 Created):**
```json
{
  "message": "User created.",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "department": "IT",
    "salary": 50000,
    "role": "employee",
    "createdAt": "2026-01-02T10:30:00.000Z",
    "updatedAt": "2026-01-02T10:30:00.000Z"
  },
  "success": true
}
```

#### User Login
```http
POST /user/login
Content-Type: application/json

{
  "email": "aamir729039@gmail.com",
  "password": "1234"
}
```

**Response (200 OK):**
```json
{
  "message": "login success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### User Logout
```http
GET /user/logout
```

**Response (200 OK):**
```json
{
  "message": "logout successfully."
}
```

### User Management Endpoints

#### Get All Users
```http
GET /user
Authorization: Bearer <JWT_TOKEN>
```

#### Get User by ID
```http
GET /user/:id
Authorization: Bearer <JWT_TOKEN>
```

#### Update User
```http
PATCH /user/:id
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "name": "John Updated",
  "salary": 55000,
  "department": "Finance"
}
```

#### Delete User
```http
DELETE /user/:id
Authorization: Bearer <JWT_TOKEN>
```

### Task Management Endpoints

#### Create New Task
```http
POST /task/addTask
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "name": "Complete Project Report",
  "date": "2026-01-15T00:00:00Z",
  "description": "Prepare quarterly project report with metrics",
  "status": "Pending"
}
```

#### View All Tasks
```http
GET /task/viewTask
Authorization: Bearer <JWT_TOKEN>
```

#### Update Task
```http
POST /task/updateTask
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "taskId": "507f1f77bcf86cd799439012",
  "status": "Completed"
}
```

#### Delete Task
```http
POST /task/deleteTask
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>

{
  "taskId": "507f1f77bcf86cd799439012"
}
```

---

## 📊 Database Schemas

### User Schema

```javascript
{
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
    trim: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false
  },
  department: {
    type: String,
    required: true,
    enum: ["IT", "Finance", "HR", "Sales", "Operations"],
    index: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  role: {
    type: String,
    enum: ["admin", "manager", "employee"],
    default: "employee",
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

### Task Schema

```javascript
{
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200,
    trim: true
  },
  date: {
    type: Date,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000,
    trim: true
  },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
    index: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}
```

## 🏗️ Architecture

### MVC (Model-View-Controller) Design Pattern

The application follows the MVC architectural pattern for clean separation of concerns:

```
REQUEST → ROUTER → MIDDLEWARE → CONTROLLER → MODEL → DATABASE
  ↓                                ↓
RESPONSE ← VIEW ← RESPONSE DATA ←--↓
```

**Model Layer** (`/models`)
- Defines data structure with Mongoose schemas
- Implements data validation rules
- Manages database interactions
- Provides query methods

**Controller Layer** (`/controllers`)
- Contains business logic
- Processes requests from routes
- Interacts with models for data operations
- Prepares responses

**View Layer** (`/views`)
- EJS templates for server-side rendering
- HTML forms and displays
- Client-side integration points

### Middleware Pipeline

Request flow through middleware stack:

```
[Incoming Request]
        ↓
[body-parser] → Parse JSON/form data
        ↓
[cookie-parser] → Extract cookies
        ↓
[userAuth] → Verify JWT token (if protected route)
        ↓
[userRole] → Check user permissions (if restricted)
        ↓
[Route Handler/Controller] → Execute business logic
        ↓
[Response Formatter] → JSON/HTML response
        ↓
[Outgoing Response]
```

### Authentication Flow

```
User Login
    ↓
[Validate Credentials]
    ├─ Check email exists in DB
    └─ Compare password hash
    ↓
[Generate JWT Token]
    ├─ Payload: { id, role }
    ├─ Secret: 'privateKey'
    └─ Token: Signed JWT
    ↓
[Set Cookie + Response]
    ├─ Store token in HTTP-only cookie
    ├─ Send token in response JSON
    └─ Client stores for future requests
    ↓
[Protected Route Access]
    ├─ Extract token from cookie/header
    ├─ Verify signature & expiration
    ├─ Attach user info to request
    └─ Allow/Deny access
```

---

## 🔐 Security Best Practices

### Password Security
- **Hashing Algorithm**: bcrypt with salt rounds = 10
- **Cost Factor**: ~100ms per password hash
- **Comparison**: Constant-time comparison to prevent timing attacks
- **Never stored in plaintext**: Passwords excluded from query results with `select: false`

### Authentication & Session Management
- **JWT Tokens**: Signed tokens prevent tampering
- **HTTP-only Cookies**: Protects against XSS attacks
- **Token Validation**: Signature and expiration verified on each request
- **Session Isolation**: Each user has unique token payload

### Input Validation & Sanitization
- **Schema Validation**: Mongoose validates all inputs against schema
- **Email Validation**: Regex pattern validation
- **Length Constraints**: Min/max length enforcement
- **Type Checking**: Strict type validation at schema level
- **Enum Validation**: Only allowed values accepted for roles/status

### Database Security
- **Indexed Queries**: Efficient query execution
- **Unique Constraints**: Email uniqueness enforced at DB level
- **Connection Pooling**: Secure connection management
- **MongoDB Authentication**: Credentials required for Atlas connections

### CORS & Headers
- Ready for CORS configuration
- Content-Type validation
- Request size limits via body-parser

---

## ⚡ Performance Optimization

### Database Query Optimization

**Indexes Strategy:**
```javascript
// User Collection Indexes
db.users.createIndex({ email: 1 }, { unique: true })      // Unique
db.users.createIndex({ role: 1 })                         // Filtering
db.users.createIndex({ department: 1 })                   // Reporting
db.users.createIndex({ createdAt: -1 })                   // Time-series

// Task Collection Indexes
db.tasks.createIndex({ status: 1 })                       // Status filtering
db.tasks.createIndex({ date: 1 })                         // Deadline queries
db.tasks.createIndex({ createdAt: -1 })                   // Activity logs
```

**Query Patterns:**
- Selective field retrieval using projection
- Pagination to limit result set size
- Index usage for filtering operations

### Caching Strategies
- **EJS Template Caching**: Enabled in production
- **Static Asset Caching**: Leverage browser caching headers
- **Query Result Caching**: Implement Redis for frequently accessed data (future enhancement)

### Connection Management
- **MongoDB Connection Pooling**: Default pool size = 10
- **Connection Reuse**: Single connection instance across requests
- **Timeout Configuration**: Prevents hanging connections

### Response Optimization
- **JSON Serialization**: Efficient data transfer
- **Gzip Compression**: Enable in production
- **Asset Minification**: CSS/JS minification in public/

---

## 🛡️ Error Handling

### Error Categories

**Validation Errors (400)**
```javascript
// Schema validation failure
{
  "message": "Validation error: email is required",
  "field": "email",
  "success": false
}
```

**Authentication Errors (401)**
```javascript
// Missing or invalid token
{
  "message": "Invalid or expired token",
  "error": "Authentication failed"
}
```

**Authorization Errors (403)**
```javascript
// Insufficient permissions
{
  "message": "Access denied: Admin role required",
  "requiredRole": "admin"
}
```

**Not Found Errors (404)**
```javascript
// Resource doesn't exist
{
  "message": "User not found",
  "id": "507f1f77bcf86cd799439999"
}
```

**Server Errors (500)**
```javascript
// Unhandled exception or DB failure
{
  "message": "Internal server error",
  "error": "Database connection timeout"
}
```

### Error Recovery Strategies
- Graceful degradation
- Detailed logging
- User-friendly error messages
- Database connection retry logic

---

## 🚀 Deployment Considerations

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Update `.env` with production MongoDB URL
- [ ] Generate strong JWT_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS origins
- [ ] Set up monitoring & logging
- [ ] Enable rate limiting
- [ ] Implement backup strategy
- [ ] Configure auto-scaling
- [ ] Setup CI/CD pipeline

### Environment-Specific Configuration

**Development:**
```env
NODE_ENV=development
PORT=3000
MONGODB_URL=mongodb://localhost:27017/employee_management
DEBUG=true
```

**Production:**
```env
NODE_ENV=production
PORT=3000
MONGODB_URL=mongodb+srv://prod:***@cluster.mongodb.net/employee_prod
DEBUG=false
JWT_EXPIRE=24h
```

### Scaling Strategies
- **Horizontal Scaling**: Multiple instances behind load balancer
- **Database Sharding**: Split data across MongoDB clusters
- **Caching Layer**: Redis for session/query caching
- **CDN**: Serve static assets from CDN
- **Microservices**: Separate authentication, user, task services (future)

---

## 📝 Development Workflow

### Git Workflow
```bash
# Feature branch development
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
# Create Pull Request
```

### Code Quality
- **Linting**: ESLint configuration (optional enhancement)
- **Code Formatting**: Prettier for consistent style
- **Pre-commit Hooks**: Validate before committing

### Testing Strategy (Recommended Enhancements)
```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e
```

---

## 🐛 Troubleshooting Guide

### MongoDB Connection Issues

**Error: connect ECONNREFUSED 127.0.0.1:27017**

**Causes & Solutions:**
1. MongoDB service not running
   ```bash
   # Windows
   net start MongoDB
   
   # macOS
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```

2. Incorrect connection string
   ```env
   # Check MONGODB_URL in .env
   # Local: mongodb://localhost:27017/database_name
   # Atlas: mongodb+srv://user:pass@cluster.mongodb.net/database_name
   ```

3. Firewall blocking connection
   - Whitelist MongoDB port (27017) in firewall
   - For Atlas: Add IP to network access list

### Authentication Errors

**Error: jwt malformed**
- Token format is invalid
- Solution: Ensure token is properly formatted in header

**Error: jwt expired**
- Token expiration time exceeded
- Solution: User needs to login again for new token

**Error: invalid signature**
- Token was tampered with or signed with different secret
- Solution: Don't modify token, ensure same JWT_SECRET

### Performance Issues

**Slow API responses**
1. Check database connection status
2. Verify indexes are created on collections
3. Monitor MongoDB query logs
4. Add pagination to large result sets

**High memory usage**
1. Check for memory leaks in event listeners
2. Verify connection pooling is working
3. Monitor concurrent connections
4. Clear old session cookies

### Port Already in Use

**Error: EADDRINUSE: address already in use :::3000**

**Solutions:**
1. Change port in `.env`
   ```env
   PORT=3001
   ```

2. Kill process using port
   ```bash
   # Windows PowerShell
   Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process
   
   # Linux/macOS
   lsof -ti:3000 | xargs kill -9
   ```

### CORS Issues

**Error: Cross-Origin Request Blocked**

**Solutions:**
1. Add CORS middleware to `index.js`:
   ```javascript
   import cors from 'cors';
   app.use(cors({
     origin: 'http://localhost:3000',
     credentials: true
   }));
   ```

2. Install cors package:
   ```bash
   npm install cors
   ```

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose ORM Guide](https://mongoosejs.com/)
- [JWT Introduction](https://jwt.io/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [RESTful API Design](https://restfulapi.net/)

---

## 🤝 Contributing

### How to Contribute

1. **Fork the repository**
2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open Pull Request**

### Code Style Guidelines
- Use consistent indentation (2 spaces)
- Follow naming conventions (camelCase for variables/functions)
- Add comments for complex logic
- Keep functions small and focused
- Validate all inputs

---

## 📄 License

ISC License - Free to use and modify

---

## 👨‍💻 Author

**Aamir** - Developer | Node.js Enthusiast

**Email**: aamir729039@gmail.com

Project created as part of Node.js professional development (PR-11 Series)

---

## 📈 Project Status

✅ **Current Version**: 1.0.0  
✅ **Status**: Production Ready  
🔄 **Last Updated**: January 2, 2026  
📊 **Maintenance**: Active

---

## 🎯 Future Enhancements

- [ ] Unit & Integration Test Suite
- [ ] Docker containerization
- [ ] Redis caching layer
- [ ] Real-time notifications with WebSockets
- [ ] Advanced task filtering & search
- [ ] Dashboard analytics & reporting
- [ ] Email notifications
- [ ] Two-factor authentication
- [ ] Audit logging system
- [ ] API rate limiting
- [ ] Swagger API documentation
- [ ] GraphQL API alternative

---

**Made with ❤️ by Aamir | Happy Coding! 🚀**
