import React from 'react';

function ParticleBackground() {
  return (
    <iframe
      title="Particle Background"
      src={`${process.env.PUBLIC_URL}/particle_background/particle.html`}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}

export default ParticleBackground;
