# Node.js Express Application

This is a Node.js application built with Express framework, demonstrating basic web server functionality, routing, middleware, and API endpoints.

## Installation

1. Clone the repository:
```
git clone <repository-url>
```

2. Navigate to the project directory:
```
cd nodejs-course-chapter-recording-express
```

3. Install dependencies:
```
npm install
```

## Usage

To start the application in development mode:
```
npm run dev
```

To start the application in production mode:
```
npm start
```

Access the application at: http://localhost:3000

## API Endpoints

- `GET /` - Home page
- `GET /about` - About page
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

- `app.js` - Main application entry point
- `routes/` - Contains route definitions
- `controllers/` - Business logic for handling requests
- `models/` - Data models
- `public/` - Static files (CSS, JS, images)
- `views/` - Template files

## Dependencies

- Node.js
- Express.js
- Morgan (HTTP request logger middleware)
- Other dependencies as listed in package.json

## License

MIT
