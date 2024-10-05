import "./index.css";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";

function App() {
    return (
        <>
            <Navbar />
           <div id="pages">
                <Movies />
           </div>
        </>
    );
}

export default App;
