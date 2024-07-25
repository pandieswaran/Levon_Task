const dataStore = require('../DataStore'); 

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        
        const success = dataStore.deleteProductById(id);

        if (!success) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = deleteProduct;
