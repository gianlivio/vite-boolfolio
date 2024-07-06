<script>
export default {

}
</script>

<template>
    <div class="app-container">
      <section class="hero text-white text-center py-5">
        <div class="container">
          <h1 class="display-4">Welcome to Gianlivio's Portfolio</h1>
          <p class="lead">Showcasing my journey as a junior developer, one project at a time.</p>
          <router-link to="/projects" class="btn btn-warning btn-lg mt-4">View My Projects</router-link>
        </div>
      </section>
  
      <section class="services py-5">
        <div class="container">
          <h2 class="text-center mb-4">What I Do</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                  <h3 class="card-title">Web Development</h3>
                  <p class="card-text">Building responsive and dynamic websites using the latest technologies.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                  <h3 class="card-title">Front-End Design</h3>
                  <p class="card-text">Crafting intuitive and visually appealing user interfaces.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <div class="card-body">
                  <h3 class="card-title">Continuous Learning</h3>
                  <p class="card-text">Always exploring new tools and techniques to improve my skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <section class="contact bg-dark text-white text-center py-5">
        <div class="container">
          <h2>Contact Me</h2>
          <p>I'd love to hear about your project or opportunity. Let's connect!</p>
          <router-link to="/about" class="btn btn-warning btn-lg mt-4">Learn More About Me</router-link>
        </div>
      </section>
    </div>
  </template>
  
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

        .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background-color: #0d1b2a;
        color: #e0e1dd;
        font-family: 'Montserrat', sans-serif;
        }

        .hero {
        background: url('/path/to/your/background.jpg') no-repeat center center;
        background-size: cover;
        padding: 60px 0;
        }

        .hero .container {
        max-width: 800px;
        margin: 0 auto;
        }

        .services .card-title {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #ecbd00;
        }

        .services .card-text {
        font-size: 1em;
        }

        .contact {
        background-color: #333;
        color: white;
        }
  </style>