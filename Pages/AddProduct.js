const express = require('express');
const Product = require('../ProductSchema');


const createProduct = async (req, res, dataStore) => {
    try {
        const { ProductId, ProductName, Price, Description } = req.body;
        
        if (!ProductId) {
            return res.status(400).json({ message: 'Product Id is required' });
        }
        if (!ProductName) {
            return res.status(400).json({ message: 'Product Name is required' });
        }
        if (!Price) {
            return res.status(400).json({ message: 'Price is required' });
        }
        if (!Description) {
            return res.status(400).json({ message: 'Description is required' });
        }

        const existingProduct = dataStore.getProductById(ProductId);
        if (existingProduct) {
            return res.status(400).json({ message: 'Product with this ID already exists' });
        }

        const newProduct = new Product({
            ProductId,
            ProductName,
            Price,
            Description,
        });

        dataStore.addProduct(newProduct);
        res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = createProduct