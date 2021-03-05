<template>
  <div>
    <NavBar />
    <router-view />
    <!-- <FoodsList /> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
// import FoodsList from "@/components/FoodsList.vue"

export default {
  components: {
    NavBar,
    // FoodsList,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}
body {
  margin: 100px 0;
}
</style>
