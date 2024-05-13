import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	discount: {
		type: Number,
		required: true
	},
	descr: {
		type: String,
		required: true
	},
	img: {
		type: Object,
		required: true
	},
	popular: {
		type: Boolean,
		default: false
	},
	show: {
		type: Boolean,
		default: true
	}
});

const Product = mongoose.model("Product", productSchema);

export default Product;