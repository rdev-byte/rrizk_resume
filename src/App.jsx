import React, { useEffect } from 'react';
import './App.css';
import './particle_background/particle.css';

// Import the particlesJS initialization function
import { initializeParticles } from './particle_background/particle';

function App() {
  useEffect(() => {
    console.log('useEffect is running'); // Check if this message appears in the console
    initializeParticles();
  }, []);

  return (
    <div className="App">
      {/* Particle background container */}
      <div id="particles-js"></div>

      {/* Your existing content */}
      <header className="App-header">
        {/* Your content here */}
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300" href="/projects">
              Projects
            </a>
            <a className="text-sm duration-500 text-zinc-500 hover:text-zinc-300" href="/contact">
              Contact
            </a>
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
        <div className="centered-container">
          <div className="absolute inset-0 -z-10 animate-fade-in" aria-hidden="true">
            <canvas width="1355" height="946" style={{ width: '1355px', height: '946px' }}></canvas>
          </div>
          <div className="center-text">
            <h1 className="z-10 text-4xl bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text white-text">
              Raphael Rizk
            </h1>
          </div>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"></div>
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-sm text-zinc-500 white-text">
              I'm a software engineer, designer, and family man. I love building things that make people's lives easier.
            </h2>
          </div>
          <canvas width="1355" height="946" style={{ width: '1355px', height: '946px' }}></canvas>
          <div className="hidden">{/* Add any additional content here */}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
