import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/App.scss";
import Layout from "./components/layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetail";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="products" element={<Product />} />
                        <Route path="products/:id" element={<ProductDetail />} />
                        <Route path="services" element={<Services />} />
                        {/* <Route path="*" element={<NoPage />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
