# Node.js MVCS + PUG Application

This is a modern TypeScript-based Node.js application built with Express framework, implementing the MVCS (Model-View-Controller-Service) architecture pattern with Pug templating engine. The application demonstrates server-side rendering, RESTful API endpoints, data management, and TypeScript integration.

## Features

- TypeScript implementation for type safety and better developer experience
- MVCS architectural pattern for clear separation of concerns
- Server-side rendering with Pug templates
- RESTful API for product management
- Fake data generation using @faker-js/faker
- Static file serving
- Error handling with custom 404 page

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd nodejs-MVCS+PUG
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

To start the application in development mode with hot-reloading:

```bash
npm run dev
```

To build the TypeScript code:

```bash
npm run build
```

To start the application in production mode:

```bash
npm start
```

Access the application at: `http://localhost:5050`

## Web Routes

- `GET /` - Home page with welcome message
- `GET /products` - View all products
- `GET /products/:id` - View details of a specific product

## API Endpoints

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product by ID
- `POST /api/products` - Create a new product
- `PATCH /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

- `server.ts` - Main application entry point
- `controllers/` - Business logic for handling requests
- `interfaces/` - TypeScript interfaces for type definitions
- `models/` - Data models
- `services/` - Service layer implementation
- `utils/` - Utility functions including fake data generation
- `public/` - Static files (CSS, JS, images)
- `views/` - Pug template files

## Tech Stack

- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: Express.js
- **Template Engine**: Pug
- **Data Mocking**: @faker-js/faker
- **Development Tools**: Nodemon, ts-node

## Dependencies

### Production

- Express.js - Web application framework
- Pug - Template engine for server-side rendering

### Development

- TypeScript - JavaScript with syntax for types
- Nodemon - Utility for automatic server restart during development
- ts-node - TypeScript execution engine for Node.js
- @faker-js/faker - Generating fake data
- @types/express, @types/node - TypeScript type definitions

## License

MIT
