<script>
export default {

}
</script>


<template>
     <header class="header">
        <nav class="d-flex justify-content-between align-items-center">
            <div class="logo">
                <a href="#">
                    <img src="/projectslogo.jpeg" alt="Logo">
                </a>
            </div>
            <ul class="d-flex nav-links">
                <li class="nav-item">
                  <router-link 
                  :to="{ name: 'home' }"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  >Home</router-link>
                </li>
                <li class="nav-item">
                  <router-link 
                  :to="{ name: 'about' }"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  >About</router-link></li>
                  <li class="nav-item">
                  <router-link 
                  :to="{ name: 'projects' }"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  >Projects</router-link>
                </li>
                <li class="nav-item">
                  <router-link 
                  :to="{ name: 'contact' }"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                  >Contact</router-link>
                </li>
            </ul>
        </nav>
    </header>
  </template>
  
  <style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

header {
  background-color: #000;
  color: #ffcc00;
  padding: 2em 4em; 

  .logo a {
    
    img {
      max-height: 10em; 
      max-width: 20em;
      height: auto;
      width: auto; 
      margin-right: 10px; 
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-links {
    list-style: none;
    gap: 3em;
  }

  nav ul li a {
    color: #ffcc00;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>