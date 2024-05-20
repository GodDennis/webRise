import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <HashRouter>
        <Routes>
            <Route
                path='/'
                element={<App />}
            />
        </Routes>
    </HashRouter>
);
