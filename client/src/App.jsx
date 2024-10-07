import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
    return (
        <>
            <Navbar />
           <div id="pages">
                <Outlet />
           </div>
        </>
    );
}

export default App;
