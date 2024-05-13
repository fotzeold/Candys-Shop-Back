import express from 'express';
import { getAllProduct, getPopularProduct } from "../controllers/product.js"
const productRouter = express.Router()

productRouter.get('/', getAllProduct);
productRouter.get('/popular', getPopularProduct)

export default productRouter;

