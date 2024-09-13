import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsCard from "./pages/NewsCard";
import Home from "./pages/Home";
import { NewsProvider } from "./contextApi/NewContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <NewsProvider>
                            <Home />
                        </NewsProvider>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
