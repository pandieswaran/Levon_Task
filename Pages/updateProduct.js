const dataStore = require('../DataStore'); 

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; 
        const updates = req.body; 

  
        const success = dataStore.updateProductById(id, updates);

        if (!success) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const updatedProduct = dataStore.getProductById(id);
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found after update' });
        }

       
        res.json({
            ProductId: updatedProduct.ProductId,
            ProductName: updatedProduct.ProductName,
            Price: updatedProduct.Price,
            Description: updatedProduct.Description
        });
        console.log(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = updateProduct;
