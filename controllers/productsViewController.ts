import { Request, Response } from "express";
import ProductService from "../services/ProductService";

export default class ProductViewController{
    constructor(private productService: ProductService) {
        this.productService = productService;
        this.renderProductsList = this.renderProductsList.bind(this);
        this.renderProductDetail = this.renderProductDetail.bind(this);
    }

        renderProductsList(req: Request, res: Response) {
            res.render('products', {
                PageTitle: 'Products List',
                description: 'List of Products in the Store',
                products: this.productService.findAll(),
            });
        }
    
        renderProductDetail(req: Request, res: Response) {
            res.render("product", {
                product: this.productService.getProductById(+req.params.id),
            })
        }
}