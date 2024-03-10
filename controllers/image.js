import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import express from 'express';

const __dirname = dirname(fileURLToPath(import.meta.url));
const imagesPath = path.join(__dirname, '../img');
const serveStaticImages = express.static(imagesPath);

const getImage = (req, res) => {
	const imageName = req.params.imageName;
	const imagePath = path.join(imagesPath, imageName);

	res.sendFile(imagePath);
};

export { serveStaticImages, getImage };
