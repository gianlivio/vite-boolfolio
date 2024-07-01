<template>
    <div class="app-container">
      <div class="background-image">
        <section class="about-hero text-white text-center py-5">
          <div class="container">
            <h1 class="display-4">About Gianlivio Iemolo</h1>
            <p class="lead">A passionate Junior Web Developer with a background in Semiotics and Digital Copywriting.</p>
          </div>
        </section>
  
        <section class="about-content py-5">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <h2>My Journey</h2>
                <p>With a diploma in classical studies and a bachelor's degree in Cultural Heritage, I pursued my passion for semiotics at the University of Bologna under the guidance of Umberto Eco. My journey continued with a Master's in Digital Copywriting and a specialization in Full Stack Web Development from Boolean.</p>
              </div>
              <div class="col-md-6">
                <h2>Skills & Expertise</h2>
                <ul>
                  <li>Web Development: HTML, CSS, JavaScript, Vue.js</li>
                  <li>Frameworks: Bootstrap, Laravel</li>
                  <li>SEO & Digital Marketing</li>
                  <li>Graphic Design & User Interface</li>
                  <li>Content Creation & Copywriting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        <section class="contact bg-dark text-white text-center py-5">
          <div class="container">
            <h2>Get in Touch</h2>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
            <a href="mailto:gianlivioiemolo@gmail.com" class="btn btn-warning btn-lg mt-4">Contact Me</a>
          </div>
        </section>
      </div>
    </div>
  </template>
  

  <style scoped lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
  
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
  }
  
  .background-image {
    background: url('/sfondo.jpg') no-repeat center center;
    background-size: cover;
    width: 100%;
  }
  
  .about-hero {
    padding: 60px 0;
    position: relative;
  }
  
  .about-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .about-hero .container {
    position: relative;
    z-index: 1;
  }
  
  .about-content {
    background-color: rgba(255, 255, 255, 0.3);
    color: #333;
    padding: 60px 0;
  }
  
  .about-content h2 {
    color: #ffcc00;
    margin-bottom: 20px;
  }
  
  .about-content p, .about-content ul {
    color: #e0e1dd; 
  }
  
  .contact {
    background-color: rgba(51, 51, 51, 0.8);
    color: white;
    padding: 60px 0;
  }
  </style>
  
  
  
  
  
  