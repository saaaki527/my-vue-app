<template>
  <div class="add__wrapper">
    <input type="text" v-model="text" />
    <button v-on:click="addFood" class="addBtn">食材を追加する</button>
  </div>
</template>

<script>
export default {}
</script>

<style>
.addBtn {
  border-radius: 15px;
  border: none;
  width: 15rem;
  height: 2.3rem;
}
</style>
