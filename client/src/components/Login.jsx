import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login({ register, setRegister }) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:3312/api/auth/login",
                credentials,
                {
                    withCredentials: true,
                }
            );
            setCredentials({ username: "", password: "" });
            navigate("/movies");
            console.info("Successfully logged in");
        } catch (err) {
            alert(`Log in failed ${err}`);
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
            <h2>Se connecter</h2>
            <form action="submit" onSubmit={handleLogin}>
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
                <p>Pas encore de compte?</p>
                <button onClick={() => setRegister(!register)} type="button">
                    {" "}
                    S'enregistrer
                </button>
            </div>
        </>
    );
}
