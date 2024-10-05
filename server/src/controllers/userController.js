import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

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

