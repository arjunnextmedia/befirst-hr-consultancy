import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate API call or setup delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // show loader for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 App Loaded Successfully</h1>
      </header>
    </div>
  );
}

export default App;
