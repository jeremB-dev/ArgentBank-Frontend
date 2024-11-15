import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import SignIn from "./pages/sign-in";
import Hero from "./components/Hero/Hero";
import Home from "./pages/home";
import User from "./pages/user";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
