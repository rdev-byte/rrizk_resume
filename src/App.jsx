import React, { useEffect } from 'react';
import './App.css';
import './particle_background/particle.css';

// Import the particlesJS initialization function

import { initializeParticles } from './particle_background/particle';

function App() {
  useEffect(() => {
    // Initialize particles.js when the component mounts
    initializeParticles();
  }, []);

  return (
    <div className="App">
      {/* Particle background container */}
      <div id="particles-js"></div>

      {/* Your existing content */}
      <header className="App-header">
        {/* Your content here */}
      </header>
    </div>
  );
}

export default App;
