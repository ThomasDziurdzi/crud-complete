import { useState } from "react";
import axios from "axios";

export default function Register({ register, setRegister }) {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:3312/api/auth/register",
                credentials
            );
            setCredentials({ username: "", password: "" });
            setRegister(!register);
            console.info("Successfully registered");
        } catch (err) {
            alert(`Registration failed ${err.response.data.message}`);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setCredentials((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <h2>S'enregistrer</h2>
            <form action="submit" onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Nom d'utilisateur"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    placeholder="Mot de passe"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Valider</button>
            </form>
            <div className="login">
                <p>Déjà enregistré?</p>
                <button onClick={() => setRegister(!register)} type="button">
                    {" "}
                    Se connecter
                </button>
            </div>
        </>
    );
}
