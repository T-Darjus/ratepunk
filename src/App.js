import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Main />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
