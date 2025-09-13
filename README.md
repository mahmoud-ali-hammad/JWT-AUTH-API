# JWT-AUTH-API

A simple Node.js authentication API built with **Express**, **JWT (JSON Web Tokens)**, and **MongoDB (optional)**.  
It demonstrates how to log in, generate a token, protect routes with middleware, and access protected resources like a dashboard.

---

## 🚀 Features

- 🔐 **JWT Authentication** (login → get token → verify token)
- 🛡️ **Protected routes** using custom middleware
- ⚡ **Express error handling** with a custom `CustomAPIError` class
- 📦 Environment variable support with **dotenv**
- 🧹 Clean project structure (controllers, routes, middleware, errors)

---

## 📂 Project Structure

```
JWT-AUTH-API/
├── controllers/
│   └── authController.js     # login & dashboard logic
├── errors/
│   └── customError.js        # custom API error class
├── middleware/
│   ├── auth.js               # authentication middleware
│   ├── errorHandler.js       # centralized error handling
│   └── notFound.js           # 404 handler
├── routes/
│   └── authRoutes.js         # login & dashboard endpoints
├── server.js                 # entry point
├── package.json
├── .env                      # environment variables (not pushed to GitHub)
```

---

## ⚙️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmoud-ali-hammad/JWT-AUTH-API.git
   cd JWT-AUTH-API
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root with:

   ```env
   PORT=3000
   JWT_SECRET=yourSuperSecretKey
   ```

4. Start the server:
   ```bash
   npm start
   ```

---

## 🔑 API Endpoints

### 1. **Login**

- **POST** `/api/login`
- **Body (JSON):**
  ```json
  {
    "username": "mahmoud",
    "password": "12345"
  }
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Login successful",
    "token": "<your-jwt-token>"
  }
  ```

---

### 2. **Dashboard (Protected)**

- **GET** `/api/dashboard`
- **Headers:**
  ```
  Authorization: Bearer <your-jwt-token>
  ```
- **Response:**
  ```json
  {
    "status": "success",
    "message": "Hello mahmoud, your lucky number is 42"
  }
  ```

---

## 🛠️ Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)

---
