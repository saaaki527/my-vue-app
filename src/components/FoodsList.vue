<template>
  <div class="nowlist">
    <div class="list__title">今登録中の食材リスト</div>
    <li class="list__items" v-for="food in foods" :key="food.id">
      {{ food.text }}
    </li>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
