const dataStore = require('../DataStore');
const Product = require('../ProductSchema');

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        let product = dataStore.getProductById(id);

        if (!product) {
            const productFromDB = await Product.findOne({ ProductId: id });

            if (!productFromDB) {
                return res.status(404).json({ message: 'Product not found' });
            }

            dataStore.addProduct(productFromDB);
            product = productFromDB;

        }

        res.json(product);
        console.log(product);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = getProduct