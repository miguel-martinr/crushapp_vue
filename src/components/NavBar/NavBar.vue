<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">
        <img src="../../assets/crushapp_logo.png" alt="logo" class="img-fluid"/>
        <span>CrushApp</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ms-5" id="navbar">
        <ul class="navbar-nav">
          <li v-for="link in navLinks" :key="link.name" class="nav-item" @click="clickLink(link)">
            <a :class="'nav-link ps-2 pe-2 ' + (link.active ? 'active' : '')" href="#">{{ link.label }}</a>
          </li>

        </ul>
      </div>
    </div>

  </nav>
</template>

<style scoped src="./NavBar.css"></style>
<script src="./Navbar.view.js"></script>

