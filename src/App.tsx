import React from 'react';
import Navigation from './components/ui/Navigation';
import Header from './components/sections/Header';
import Details from './components/sections/Details';
import VibeMarketPreview from './components/sections/VibeMarketPreview';
import BuiltWith from './components/sections/BuiltWith';
import Footer from './components/sections/Footer';
import GlitchContainer from './components/ui/GlitchContainer';
import './index.css';

function App() {
  const appStyle: React.CSSProperties = {
    backgroundColor: '#000000',
    fontFamily: 'monospace',
    scrollSnapType: 'y mandatory',
    overflowY: 'scroll',
    height: '100vh',
  };

  const sectionStyle: React.CSSProperties = {
    height: '100vh',
    width: '100vw',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    padding: '10vh 10vw', // 10% padding on all sides
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={appStyle}>
      <Navigation />
      
      <GlitchContainer glitchOnly intensity="low" style={sectionStyle}>
        <Header />
      </GlitchContainer>
      
      <GlitchContainer glitchOnly intensity="low" style={sectionStyle}>
        <Details />
      </GlitchContainer>
      
      <GlitchContainer glitchOnly intensity="low" style={sectionStyle}>
        <VibeMarketPreview />
      </GlitchContainer>
      
      <GlitchContainer glitchOnly intensity="low" style={sectionStyle}>
        <BuiltWith />
      </GlitchContainer>
      
      <div style={{
        height: '20vh', // Footer takes 20% of screen
        width: '100vw',
        scrollSnapAlign: 'start',
        scrollSnapStop: 'always',
        padding: '2vh 10vw',
        boxSizing: 'border-box',
      }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
 