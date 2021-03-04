<template>
  <div class="advise__box">
    <h2>
      「今日はこの食材を使ったごはんを作ってみよう！」と、ランダムで食材を提案するアプリです。
    </h2>
    <h3>
      何か自炊してみたいけど何を作ればいいかわからない、食材・メニューがマンネリ化しちゃう...という人に。<br />
      出てきた食材の組み合わせが美味しいかどうかはわかりません。<br />
    </h3>
    <button v-on:click="adviseFood" class="adviseBtn">
      食材を提案してもらう
    </button>
    <div class="result" id="result">{{ result }}</div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.advise__box {
  margin-bottom: 30px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 15px;
  font-weight: normal;
}
.adviseBtn {
  border-radius: 15px;
  border: none;
  width: 15rem;
  height: 2.3rem;
}
</style>
