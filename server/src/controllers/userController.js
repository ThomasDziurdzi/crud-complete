import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, password } = req.body;
    // const username = req.body.username;
    // const password = req.body.password;

    if (!username || !password) {
        return res
            .status(400)
            .json({ message: "Username or password required" });
    }

    const existingUser = await User.findUserByUsername(username);

    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // 10: hash rounds

    await User.create({ username: username, password: hashedPassword });

    res.status(201).json({ message: "User registered" });
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findUserByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET, {
        expiresIn: "1h",
    });

    res.cookie("token", token, {
        httpOnly: false,
        secure: false,
        samSite: "Strict",
    });

    res.status(200).json({ message: "Sucessfully logged in" });
};

export const protectedRoutes = (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Unathorized " });
    }

    try {
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        res.status(200).json({ message: `Welcome user ${decoded.id}` });
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export const logout = (req, res) => {
    res.clearCookie("token");
    res.status(200).json({ message: "Successfully logged out" });
};
