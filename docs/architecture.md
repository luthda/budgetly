# Architecture Documentation

## 🏛️ Architecture Diagram

```plaintext
+-------------------------------------------------------+
|                   User's Mobile Device                |
|                 (React SPA with Vite.js)              |
|                           |                           |
|        Static Files / SPA Hosting (Netlify/CF)        |
|                           |                           |
+---------------------------|---------------------------+
                            |
             REST API (JSON over HTTPS)
                            |
+---------------------------v---------------------------+
|                    Backend API                        |
|                   (Node.js + Express)                 |
|                                                       |
|   +----------------------+-----------------------+    |
|   |       Middleware     |    Authentication     |    |
|   |   (Validation, JWT)  |  (Clerk/Auth0/JWT)    |    |
|   +----------------------+-----------------------+    |
|                          |                            |
+--------------------------|----------------------------+
                           |
+--------------------------v----------------------------+
|                     Database Layer                    |
|                        (MongoDB)                      |
|                  Managed via MongoDB Atlas            |
+-------------------------------------------------------+
```

## Architecture Overview

This diagram illustrates the high-level architecture of our AI-driven budgeting tool. The system is built with a modern, scalable stack that includes:

1. **Frontend Layer**

   - React SPA built with Vite.js
   - Hosted on static hosting services (Netlify/Cloudflare)
   - Optimized for mobile devices

2. **Backend Layer**

   - Node.js + Express.js server
   - RESTful API architecture
   - Middleware for validation and request processing
   - Authentication handled via third-party services (Clerk/Auth0)

3. **Database Layer**
   - MongoDB as the primary database
   - Managed through MongoDB Atlas for scalability and reliability

The architecture follows a clear separation of concerns and is designed to be scalable, maintainable, and secure. Each layer communicates through well-defined interfaces, primarily using REST APIs over HTTPS.

## Domain Model

For detailed information about the data model and entity relationships, see the [Domain Model Documentation](./domain-model.md).
