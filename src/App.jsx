import "./App.css";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Info from "./components/layout/Info";
import Navbar from "./components/layout/Navbar";
import Services from "./components/layout/Services";

function App() {
  return (
    <div className="container">
      <Header />
      <Navbar />
      <Info />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
