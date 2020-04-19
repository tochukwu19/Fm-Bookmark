import React from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  );
}

export default App;
