import NavBar from "./components/layout/nav/NavBar";
import {ToastContainer} from "react-toastify";
import Router from "./components/layout/Router";
import {LanguageProvider} from "./utils/contexts/LanguageContext";

const App = () => {

    return (
        <LanguageProvider>
            <Router>
                <NavBar/>
                <ToastContainer/>
            </Router>
        </LanguageProvider>
    );
};

export default App;
