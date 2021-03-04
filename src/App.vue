<template>
  <div>
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar,
  },
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: Helvetica, sans-serif;
}
body {
  margin: 0;
}
</style>
