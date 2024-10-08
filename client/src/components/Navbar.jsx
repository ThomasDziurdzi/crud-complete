import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles/Navbar.css";

export default function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post(
            "http://localhost:3312/api/auth/logout",
            {},
            { withCredentials: true }
        );
        navigate("/");
    };

    return (
        <nav>
            <h1>Wild Movies</h1>
            {location.pathname !== "/" && (
                <button onClick={handleLogout} type="button">
                    Logout
                </button>
            )}
        </nav>
    );
}
