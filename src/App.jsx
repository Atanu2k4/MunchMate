import { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CustomCursor from "./components/CustomCursor";
import Footer from './components/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container flex flex-col min-h-screen">
      {/* Ensure no margin is added between components */}
      <Navbar />
      <Hero />
      <Footer />
      <CustomCursor />
    </div>
  );
}

export default App;