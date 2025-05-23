import express, { Request, Response } from "express";
import { generateFakeProducts } from "./utils/fakeData";
import path from "path";
import ProductController from "./controllers/productController";
import ProductService from "./services/ProductService";

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'pug');

const fakeProductsData = generateFakeProducts();

const productService = new ProductService(fakeProductsData);

const productsController = new ProductController(productService);

app.get('/products', (req, res) => productsController.renderProductsList(req, res));

app.get('/products/:id', (req, res) => productsController.renderProductDetail(req, res));
// ** GET ALL PRODUCTS
app.get("/api/products", (req, res) => productsController.getProducts(req, res));
// ** GET A SINGLE PRODUCT
app.get("/api/products/:id", (req: Request, res: Response) => productsController.getProductById(req, res));

// ** CREATE A NEW PRODUCT
app.post("/api/products", (req, res) => productsController.createProduct(req, res));

// ** UPDATE
app.patch("/api/products/:id", (req, res) => productsController.updateProduct(req, res));

// ** DELETE
app.delete("/api/products/:id", (req, res) => productsController.deleteProduct(req, res));

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});
app.get('*', (req, res) => {
  res.status(404).render('notFound', { title: 'Page Not Found' });
});

const PORT: number = 5050;
app.listen(PORT, () => {
  console.log(`Server running at => http://localhost:${PORT}`);
});
