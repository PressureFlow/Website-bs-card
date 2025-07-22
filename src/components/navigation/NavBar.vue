<template>
  <header>
    <div>
      <nav class="navbar">
        <div class="navbar-icon">
          <i class="bx bxs-balloon"></i>
        </div>

        <div class="navbar navbar-links">
          <router-link to="/" class="navbar-link">Home</router-link>
          <router-link to="/portfolio" class="navbar-link">Portfolio</router-link>
          <router-link to="/technologies" class="navbar-link">Technologies</router-link>
          
        </div>
        <button class="btn">HIRE ME</button>
      </nav>
    </div>
  </header>
</template>

<style>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 70px;
  width: 100%;
}

.navbar-links {
  width: 50%;
}

.navbar-link {
  text-decoration: none;
  /* color: #f09819; */
  font-size: 20px;
  font-weight: bold;
  color: #1d1d24;
  cursor: pointer;
  transition: all .2s ease-in-out;
}
.navbar-link:hover {
  transform: scale(1.2);
  color: orange;
  
}


</style>