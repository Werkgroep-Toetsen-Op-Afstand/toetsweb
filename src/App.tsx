import NavBar from "./components/layout/nav/NavBar";
import {ToastContainer} from "react-toastify";
import Router from "./components/layout/Router";
import {LanguageProvider} from "./utils/contexts/LanguageContext";
import {ScanDataProvider} from "./utils/contexts/ScanDataContext";

const App = () => {

    return (
        <LanguageProvider>
            <ScanDataProvider>
                <Router>
                    <NavBar/>
                    <ToastContainer/>
                </Router>
            </ScanDataProvider>
        </LanguageProvider>
    );
};

export default App;
