<script setup>
import RetailersList from '../components/RetailersList/RetailersList.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-12 text-center">
        <RetailersList :retailers="[
          {
            id: 1,
            name: 'OnlineCanarias',
            state: 'active',
            url: 'https://onlinecanarias.com',
            logo: 'https://pbs.twimg.com/media/EtAWvb6WMAE78bL.jpg'
          },
          {
            id: 2,
            name: 'UltimaInformatica',
            state: 'inactive',
            url: 'https://onlinecanarias.com',
            logo: 'https://onlinecanarias.com/wp-content/uploads/2020/10/onlinecanarias-logo.pnghttps://www.onlinecanarias.com/img/online-canarias-logo-1590946050.jpg'
          }
        ]"
        />
      </div>
    </div>
  </div>
</template>
