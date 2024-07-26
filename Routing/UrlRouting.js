const express = require('express');
const router = express.Router();
const createProduct = require('../Pages/AddProduct');
const getProduct = require('../Pages/IdProduct');
const updateProduct = require('../Pages/updateProduct');
const deleteProduct = require('../Pages/DeleteProduct');
const dataStore = require('../DataStore');
//--------------------------------------------------------------------------------------------------------------------------------------------------

const userRegistration = require('../Pages/UserRegistration')
const UserLogin = require('../Pages/UserLogin')
const authenticateToken = require('../Middleware/authenticateToken')
//--------------------------------------------------------------------------------------------------------------------------------------------------

const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 60 });
const Axios = require('axios')
//--------------------------------------------------------------------------------------------------------------------------------------------------

const userRegister = require('../Pages/userRegister')
const user = require('../UserSchema')

//--------------------------------------------------------------------------------------------------------------------------------------------------

const http = require('http');
const socketIo = require('socket.io');
const server = http.createServer(router);
const io = socketIo(server);

//--------------------------------------------------------------------------------------------------------------------------------------------------

// const AppError = require('../errors/AppError');
// const DatabaseError = require('../errors/DatabaseError');
// const ValidationError = require('../errors/ValidationError');
// const errorHandler = require('../Middleware/errorHandler')

//--------------------------------------------------------------------------------------------------------------------------------------------------


//Task 1

// Create Product route
router.post('/createproduct', (req, res) => {
    createProduct(req, res, dataStore);
});

// Get all products
router.get('/products', (req, res) => {
    try {
        const products = dataStore.getProducts();
        res.json(products);
        console.log(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get product by ID
router.get('/products/:id', (req, res) => {
    getProduct(req, res, dataStore);
});

// Update product by ID
router.patch('/products/:id', (req, res) => {
    updateProduct(req, res, dataStore);
});

// Delete product by ID
router.delete('/products/:id', (req, res) => {
    deleteProduct(req, res, dataStore);
});


//--------------------------------------------------------------------------------------------------------------------------------------------------
//Task 2

//signup Page
router.post('/signup', (req, res) => {
    userRegistration(req, res);
});

// Login route
router.post('/login', async (req, res) => {
    await UserLogin(req, res);
});

// Protected route
router.get('/profile', authenticateToken, (req, res) => {
    console.log(req.headers['authorization']);
    res.json({ message: "Protected route accessed", user: req.user });
});

// Another protected route
router.get('/settings', authenticateToken, (req, res) => {
    res.json({ message: "Settings route accessed", user: req.user });
});

//--------------------------------------------------------------------------------------------------------------------------------------------------
//Task 3

// Fetch data from external API and cache it
router.get('/external', async (req, res) => {
    const cacheKey = 'posts';
    try {
        const cachedData = cache.get(cacheKey);
        // console.log(cachedData,"11")
        if (cachedData) {
            return res.json(cachedData);
        } else {
            const response = await Axios.get('https://jsonplaceholder.typicode.com/posts');
            const postsData = response.data;
            cache.set(cacheKey, postsData);
            res.json(postsData);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// To Fetch the Cache Files
router.get('/show-cache', (req, res) => {
    const keys = cache.keys(); // Get all keys in the cache
    const cacheContents = keys.map(key => {
        return { key, value: cache.get(key) }; // Fetch value for each key
    });
    res.json({ cache: cacheContents });
});

//--------------------------------------------------------------------------------------------------------------------------------------------------  
//Task 4

// Signup Page User
router.post('/signupuser', async (req, res, next) => {
    try {
        await userRegister(req, res);
    } catch (error) {
        logger.error(`Signup Error: ${error.message}`);
        next(new AppError('User registration failed', 500));
    }
});

//Get All the User Details
router.get('/alluser', async (req, res) => {
    try {
        const users = await user.find();
        res.json(users);
        console.log(users)
    } catch (error) {
        console.error('Error fetching User Details:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get a user by ID
router.get('/user/:id', async (req, res) => {
    try {
        const User = await user.findById(req.params.id);
        if (!User) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(User);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update a user by ID
router.put('/user/:id', async (req, res) => {
    try {
        const User = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!User) return res.status(404).json({ error: 'User not found' });
        res.status(200).json(User);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete a user by ID
router.delete('/userdelete/:id', async (req, res) => {
    try {
        const User = await user.findByIdAndDelete(req.params.id);
        if (!User) return res.status(404).json({ error: 'User not found' });
        res.status(200).json({ message: 'User deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

//--------------------------------------------------------------------------------------------------------------------------------------------------

//Task 5

//First terminate All The Process

//Public folder => index.html
//server.js

//After Run node server

//To Open Two Different Browser 

//And enter the url: http://localhost:8000/

//two browser side by side = one side of the button click and another window will get the reflrct the count

//--------------------------------------------------------------------------------------------------------------------------------------------------

// //Task 6

// // Get a user by ID and Error to store a Log File using Middleware
// router.get('/users/:id', async (req, res, next) => {
//     try {
//         const User = await user.findById(req.params.id);
//         if (!User) {
//             return next(new AppError('User not found', 404));
//         }
//         res.status(200).json(User);
//     } catch (err) {
//         next(err); // Forward the error to the error handling middleware
//     }
// });

// //Run the Router and Error to store and log File
// router.get('/database', (req, res, next) => {
//     next(new DatabaseError('This is a database error example'));
// });

// // Error Handling Middleware
// router.use(errorHandler);

module.exports = router;
