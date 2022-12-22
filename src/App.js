import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components";
import { Home, About, Products, SingleProduct, Posts, Error } from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<SingleProduct />} />
          <Route path="posts" element={<Posts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
