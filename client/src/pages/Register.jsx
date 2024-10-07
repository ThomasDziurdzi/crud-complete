import "../pages/styles/Register.css";

export default function Register() {
    return (
        <div className="register-container">
            <form action="submit">
                <input type="text" placeholder="E-mail" name="email" />
                <input type="text" placeholder="Mot de passe" name="password" />
                <button>Valider</button>
            </form>
            <div className="login">
                <p>Déjà enregistré?</p>
                <button> Se connecter</button>
            </div>
        </div>
    );
}
