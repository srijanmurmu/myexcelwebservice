// Example API calls - You can use these with curl or in your browser

// 1. Get API information
// GET http://localhost:3000/

// 2. Get all users
// GET http://localhost:3000/api/users

// 3. Get specific user by ID
// GET http://localhost:3000/api/users/10901976

// 4. Search users by name
// GET http://localhost:3000/api/users/search?name=John

// 5. Search by department
// GET http://localhost:3000/api/users/search?department=Engineering

// 6. Get statistics
// GET http://localhost:3000/api/stats

// 7. Health check
// GET http://localhost:3000/health

/* ============================================
   CURL Examples (run in terminal)
   ============================================ */

// Get all users:
// curl http://localhost:3000/api/users

// Get user by ID:
// curl http://localhost:3000/api/users/10901976

// Search by name:
// curl "http://localhost:3000/api/users/search?name=John"

// Get stats:
// curl http://localhost:3000/api/stats
