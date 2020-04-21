import React from 'react';
import './App.css';
import Layout from "./Components/Layout/Layout";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Extension from "./Components/Extension/Extension";
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Hero />
        <Features />
        <Extension />
        <Faq />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
