<template>
  
  <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Productos</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="retailer in retailers" :key="retailer.id" :class="getRetailerClasses(retailer)">
      <th scope="row"><input type="checkbox" name="" id=""></th>
      <td><img :src="retailer.logo" alt="" class="rounded-circle float "></td>
      <td>{{ retailer.name }}</td>
      <td><span class="retailer-state">{{ retailer.state }}</span></td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

</template>

<script src="./RetailersList.view.js"></script>
<style scoped src="./RetailersList.css">
</style>