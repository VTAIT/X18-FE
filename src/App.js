import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Notification from "./components/Notification";
import './App.css'
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Notification />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
