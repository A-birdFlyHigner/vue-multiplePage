<template>
  <div id="test">
    这是一个测试页面。不管你信不信，反正我信了
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'test'
}
</script>

<style>
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
