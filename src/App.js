import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading/Loading";
import Home from "./page/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./page/PrivacyPolicy";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
