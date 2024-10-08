import { useState } from "react";
import Register from "../components/Register";
import "../pages/styles/AuthContainer.css";
import Login from "../components/Login";

export default function AuthContainer() {
    const [register, setRegister] = useState(false);

    return (
        <div className="auth-container">
            {register ? (
                <Login register={register} setRegister={setRegister} />
            ) : (
                <Register register={register} setRegister={setRegister} />
            )}
        </div>
    );
}
