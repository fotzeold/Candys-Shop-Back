import Product from "../models/product.js";

async function getAllProduct(req, res) {
	try {
		const allProducts = await Product.find({ show: true });

		if (!allProducts) return res.status(404).json({ message: "Products not found" });

		return res.status(200).json(allProducts);
	} catch (error) {
		console.error('Error:', error);
		res.status(500).json({ message: "Internal Server Error" });
	}
}

async function getPopularProduct(req, res) {
	try {
		const popularProducts = await Product.find({ popular: true, show: true });

		if (!popularProducts) return res.status(404).json({ message: "Popular products not found" });

		return res.status(200).json(popularProducts);
	} catch (error) {
		console.error('Error:', error);
		return res.status(500).json({ message: "Internal Server Error" });
	}
}

export { getAllProduct, getPopularProduct } 