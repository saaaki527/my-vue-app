<template>
  <div class="form__wrapper">
    <div class="main-text">「この食材使ってごはん作ってみたら？」を提案</div>
    <div class="sub-text">
      自炊してみたいけど何から作ればいいかわからない...自炊のメニューがいつも同じで飽きた...という人に
    </div>
    <button v-on:click="adviseFood" class="adviseBtn">
      今日の食材を教えて
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    adviseFood() {
      alert("未実装")
    },
  },
}
</script>

<style scoped>
.form__wrapper {
  padding: 50px;
  max-width: 700px;
}
.main-text {
  padding: 20px;
  font-weight: bold;
  font-size: 20px;
}
.sub-text {
  padding: 20px;
  padding-top: 10px;
}
.adviseBtn {
  margin: 15px 105px;
  border: none;
  width: 350px;
  height: 4rem;
  border-radius: 30px;
  background-color: #ee6b59;
  font-size: 25px;
  color: white;
  letter-spacing: 1px;
}
</style>
