import { useEffect } from 'react';
import Header from './components/sections/Header';
import Details from './components/sections/Details';
import VibeMarketPreview from './components/sections/VibeMarketPreview';
import BuiltWith from './components/sections/BuiltWith';
import Footer from './components/sections/Footer';
import GlitchContainer from './components/ui/GlitchContainer';
import { COLORS } from './styles/theme';

function App() {
  useEffect(() => {
    // Set the document title
    document.title = 'VibesFlow - Create DJ Sets with Your Vibes';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'VibesFlow is the first app that lets you create music through your motion. Experience decentralized frequencies and collective resonance.');
    }
    
    // Set body background
    document.body.style.backgroundColor = COLORS.background;
    document.body.style.color = COLORS.textPrimary;
    document.body.style.fontFamily = 'monospace';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'auto';
  }, []);

  const appStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: COLORS.background,
    color: COLORS.textPrimary,
    position: 'relative',
  };

  return (
    <div style={appStyle}>
      {/* Global background glitch effect */}
      <GlitchContainer
        glitchOnly
        intensity="low"
        animated={true}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
      
      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />
        <Details />
        <VibeMarketPreview />
        <BuiltWith />
        <Footer />
      </div>
    </div>
  );
}

export default App;
