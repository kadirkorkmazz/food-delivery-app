import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import Section from './components/Section/Section';
import DownloadAppSection from './components/DownloadAppSection/DownloadAppSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='content'>
      <Header></Header>
      <Hero></Hero>
      <Section></Section>
      <DownloadAppSection></DownloadAppSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
