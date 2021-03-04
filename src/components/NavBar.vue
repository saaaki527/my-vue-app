<template>
  <div class="nav__bar">
    <router-link to="/" class="nav__logo nav__link">食材ピッカー</router-link>
    <div class="nav__items">
      <router-link to="/about" class="nav__item nav__link"
        >食材追加</router-link
      >
      <router-link to="/my-page" class="nav__item nav__link">
        Memo
      </router-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.nav__bar {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: #f05b46;
}
.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #f8f5f4;
  text-decoration: none;
}
.nav__link:visited {
  color: #f8f5f4;
}
.nav__link:hover {
  font-weight: bold;
  color: #fff;
}
.nav__logo {
  width: 130px;
}
.nav__items {
  display: flex;
}
.nav__item {
  width: 8rem;
  border-left: 1px solid #eee;
}
</style>
