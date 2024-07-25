const User = require('../UserSchema')

// User Signup Function and Routing
const userRegister = async (req, res) => {
    try {
        const { name, email, password, phonenumber } = req.body;

        // Validation
        if (!name || !email || !password || !phonenumber) {
            return res.status(400).json({ message: "Name, Email, Password and Phone numberare required." });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists with this email." });
        }
        // Create a new user
        const newUser = new User({ name, email, password, phonenumber});
        await newUser.save();
        console.log("User registered:", newUser);
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ message: 'User registration failed' });
    }
};

module.exports = userRegister
