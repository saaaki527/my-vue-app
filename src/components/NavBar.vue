<template></template>

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
