<template>
  <div class="form__wrapper">
    <input type="text" v-model="text" class="form__input" />
    <button v-on:click="addList" class="addBtn">追加する</button>
    <div v-for="(T, i) in list" v-bind:key="i">{{ T }}</div>
  </div>
</template>

<script>
export default {
  name: "Memo", //これなくても動くのは動く。
  data: function() {
    return {
      text: "",
      list: [],
    }
  },
  methods: {
    addList: function() {
      this.list.push(this.text)
      this.text = ""
    },
  },
}
</script>

<style>
.form__wrapper {
  padding: 1rem;
  display: flex;
}
.form__input {
  width: 50%;
  height: 2rem;
  padding: 0.5rem;
  line-height: 1rem;
  border-radius: 5px;
  resize: none;
}
.addBtn {
  width: 5rem;
  height: 2rem;
  border: none;
  border-radius: 15px;
  margin-left: 10px;
}
</style>
