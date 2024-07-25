const dataStore = require('../DataStore'); 

const getProduct = (req, res, dataStore) => {
  try {
    const products = dataStore.getProducts(); 
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.json(products);
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = getProduct;
