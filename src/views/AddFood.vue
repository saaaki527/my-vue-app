<template>
  <div class="home__wrapper">
    <div class="form__wrapper">
      <input
        class="form__textarea"
        type="text"
        v-model="inputValue"
        placeholder="例：にんじん,とうもろこし,白菜"
      />
      <div class="form__buttons">
        <button v-on:click="addFood" class="addBtn">
          追加する
        </button>
      </div>
    </div>
    <div class="list__wrapper">
      <div class="list__title">今登録中の食材リスト</div>
      <div class="list__items" v-for="food in foods" :key="food.id">
        {{ food.text }}
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
export default {
  name: "addFood",
  data() {
    return {
      foods: [],
      inputValue: "",
    }
  },
  methods: {
    addFood() {
      firebase
        .firestore()
        .collection("foods")
        .add({
          text: this.inputValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          docRef.get().then((docRef) => {
            this.foods.push({
              id: docRef.id,
              text: docRef.data().text,
              createdAt: docRef.data().createdAt,
            })
          })
        })
      this.inputValue = ""
    },
  },
  created() {
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
  },
}
</script>

<style scoped>
.form__wrapper {
  padding: 1rem;
  display: flex;
}
.form__textarea {
  width: 50%;
  height: 2rem;
  padding: 0.5rem;
  line-height: 1rem;
  border-radius: 5px;
  resize: none;
}
.form__textarea:focus {
  outline: none;
}
.addBtn {
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 15px;
  margin-left: 10px;
}
</style>
