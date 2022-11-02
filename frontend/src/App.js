import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import LoginScreen from "./Screens/LoginScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart">
              <Route index element={<CartScreen />} />
              <Route path=":id" element={<CartScreen />} />
            </Route>
            <Route path="/" element={<HomeScreen />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
