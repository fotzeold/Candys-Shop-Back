import express from 'express';
import getAllProduct from "../controllers/product.js"
const productRouter = express.Router()

productRouter.get('/', getAllProduct);

export default productRouter;

