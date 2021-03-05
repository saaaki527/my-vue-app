<template>
  <div class="all__wrapper">
    <div class="description">
      <div class="main-text">「この食材使ってごはん作ってみたら？」を提案</div>
      <div class="sub-text">
        自炊してみたいけど何から作ればいいかわからない...自炊のメニューがいつも同じで飽きた...という人に
      </div>
      <button v-on:click="adviseFood" class="adviseBtn">
        今日の食材を教えて
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  data() {
    return {
      text: "",
    }
  },
  methods: {
    adviseFood() {
      alert("未実装")
      firebase
        .firestore()
        .collection("foods")
        .orderBy("createdAt") //並べ替え
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            this.foods.push({
              text: doc.data().text,
              createdAt: doc.data().createdAt,
            })
          })
        })
      // function getRandomElement(array) {
      // return array[Math.floor(Math.random() * array.length)];
    },
  },
}
</script>

<style scoped>
.all__wrapper {
  padding: 30px;
  max-width: 700px;
}
.description {
  padding: 20px;
  min-width: 500px;
}
.main-text {
  font-weight: bold;
  font-size: 20px;
}
.sub-text {
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
