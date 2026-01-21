const User = require('../models/userModel');
const registerSchema = require('../utils/zodValidation').registerSchema;
const bcrypt = require('bcryptjs');
const { generateToken } = require('../utils/jwt');
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const register = async (req, res) => {
    try {
        const { name, email, password, bio } = req.body;
        const avatar = req.file ? req.file.path : null;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const validatedData = registerSchema.safeParse({ name, email, password, bio });
        if (!validatedData.success) {
            return res.status(400).json({ message: "Invalid input data", errors: validatedData.error.flatten() });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists with this email" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            avatar,
            bio
        });

        await newUser.save();

        const token = await generateToken(newUser._id);

        return res.status(201).json({ message: "User registered successfully", user: newUser, token });
    } catch (error) {
        console.error("Registration error:", error);
        return res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = await generateToken(user._id);
        return res.status(200).json({ message: "Login successful", user, token });
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { register, upload, login };