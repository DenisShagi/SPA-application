import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Category } from "./Pages/Category";
import { Recipe } from "./Pages/Recipe";
import { NotFound } from "./Pages/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="container content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/category/:name" element={<Category />} />
            <Route path="/meals/:id" element={<Recipe />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
