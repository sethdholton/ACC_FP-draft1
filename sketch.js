let button;
let particles;

function setup() {
  createCanvas(600, 600, WEBGL);

  // Create a button to reset the particle system.
  button = createButton('Reset');

  // Call resetModel() when the user presses the button.
  button.mousePressed(resetModel);

  // Add the original set of particles.
  resetModel();
}

function draw() {
  background(50);

  // Enable orbiting with the mouse.
  orbitControl();

  // Turn on the lights.
  lights();

  // Style the particles.
  noStroke();

  // Draw the particles.
  model(particles);
}

function resetModel() {
  // If the p5.Geometry object has already been created,
  // free those resources.
  if (particles) {
    freeGeometry(particles);
  }

  // Create a new p5.Geometry object with random spheres.
  particles = buildGeometry(createParticles);
}

function createParticles() {
  for (let i = 0; i < 60; i += 1) {
    // Calculate random coordinates.
    let x = randomGaussian(0, 20);
    let y = randomGaussian(0, 20);
    let z = randomGaussian(0, 20);

    push();
    // Translate to the particle's coordinates.
    translate(x, y, z);
    // Draw the particle.
    sphere(5);
    pop();
  }
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode == 32) {
    resetModel();
  }
}