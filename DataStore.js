let products = [];

//Add the Product in the Array
const addProduct = (product) => {
    products.push(product);
};

//Get All the Products
const getProducts = () => products;

//get The Product Datas get using ID 
const getProductById = (id) => products.find(p => p.ProductId === id);


//Update the Products Data using Id
const updateProductById = (id, updatedProduct) => {
    const index = products.findIndex(p => p.ProductId === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...updatedProduct };
        return true; 
    }
    return false; 
};

const deleteProductById = (id) => {
    products = products.filter(p => p.ProductId !== id);
};

module.exports = {
    getProducts,
    addProduct,
    getProductById,
    updateProductById,
    deleteProductById
};
