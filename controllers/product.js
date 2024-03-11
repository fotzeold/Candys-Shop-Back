import Product from "../models/product.js";

async function getAllProduct(req, res) {
	try {
		const allProducts = await Product.find();
		res.status(200).json(allProducts);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

export default getAllProduct