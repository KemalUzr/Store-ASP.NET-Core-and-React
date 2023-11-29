import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import About from "../../features/About/About";
import Catalog from "../../features/catalog/Catalog";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            { path: 'about', element: <About /> },
            { path: '', element: <Catalog /> },
            
        ]
    }
])