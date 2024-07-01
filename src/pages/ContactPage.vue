<script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // Logica per gestire l'invio del modulo
        console.log("Form Submitted", this.form);
        alert('Thank you for your message! I will get back to you soon.');
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      }
    }
  }
  </script>
  
  
  
  <template>
    <div class="app-container">
      <div class="background-image">
        <section class="contact-hero text-white text-center py-5">
          <div class="container">
            <h1 class="display-4">Contact Gianlivio Iemolo</h1>
            <p class="lead">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
          </div>
        </section>
  
        <section class="contact-form py-5">
          <div class="container">
            <h2 class="text-center mb-4">Get in Touch</h2>
            <form @submit.prevent="submitForm">
              <div class="row mb-3">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" v-model="form.name" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="form.email" class="form-control" required>
                  </div>
                </div>
              </div>
              <div class="form-group mb-3">
                <label for="message">Message</label>
                <textarea id="message" v-model="form.message" class="form-control" rows="5" required></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-warning btn-lg">Send Message</button>
              </div>
            </form>
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
  
  .contact-hero {
    padding: 60px 0;
    position: relative;
  }
  
  .contact-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .contact-hero .container {
    position: relative;
    z-index: 1;
  }
  
  .contact-form {
    background-color: rgba(255, 255, 255, 0.3);
    color: #333;
    padding: 60px 0;
  }
  
  .contact-form h2 {
    color: #ffcc00;
    margin-bottom: 20px;
  }
  
  .contact-form .form-group label {
    color: #e0e1dd;
  }
  
  .contact-form .form-control {
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    color: #333;
  }
  
  .contact-form .btn {
    background-color: #ffcc00;
    color: #333;
    font-weight: bold;
  }
  </style>
  