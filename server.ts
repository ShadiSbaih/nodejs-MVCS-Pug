import express, { Request, Response } from "express";

import { generateFakeProducts } from "./utils/fakeData";
import path from "path";
// import ProductController from "./controllers/productController";
import ProductService from "./services/ProductService";
import productsRouter from "./Routes/products.route";
import ProductViewController from "./controllers/productsViewController";

import ErrorMiddleware from "./middlewares/Error"; // Add this import
import NotFoundMiddleware from "./middlewares/NotFound"; // Add this import
import helmet from "helmet";
import morgan from "morgan";
import { rateLimit } from 'express-rate-limit'
import compression from "compression";


import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  helmet({
    contentSecurityPolicy: false,
    frameguard: {
      action: "deny",
    },
  }),
);

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(compression({ filter: shouldCompress }));
function shouldCompress(req: Request, res: Response) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard compression
  return compression.filter(req, res);
}

// Middleware for rate limiting
const limiter = rateLimit({
  windowMs: 5000,
  limit: 2,
  message: "Too many requests, please try again later.",
})

// Apply the rate limiting middleware to all requests.
app.use(limiter)

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

const fakeProductsData = generateFakeProducts();

const productService = new ProductService(fakeProductsData);

// const productsController = new ProductController(productService);

const productsViewController = new ProductViewController(productService);

app.get('/products', productsViewController.renderProductsList);

app.get('/products/:id', productsViewController.renderProductDetail);

app.use("/api/products", productsRouter);

// // ** GET ALL PRODUCTS
// app.get("/api/products", );

// // ** CREATE A NEW PRODUCT
// app.post("/api/products", (req, res) => productsController.createProduct(req, res));

// // ** GET A SINGLE PRODUCT
// app.get("/api/products/:id", (req: Request, res: Response) => productsController.getProductById(req, res));

// // ** UPDATE
// app.patch("/api/products/:id", (req, res) => productsController.updateProduct(req, res));

// // ** DELETE
// app.delete("/api/products/:id", (req, res) => productsController.deleteProduct(req, res));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});

//Middleware for handling errors
app.use(ErrorMiddleware.handleError);
// Middleware for handling 404 Not Found
app.use(NotFoundMiddleware.handleNotFound);

// app.get('*', (req, res) => {
//   res.status(404).render('notFound', { title: 'Page Not Found' });
// });

// Middleware for logging requests
app.use(morgan('dev'));


const PORT: number = 5050;
app.listen(PORT, () => {
  console.log(`Server running at => http://localhost:${PORT}`);
});
