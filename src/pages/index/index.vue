<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body, p, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, table, th, td, form, fieldset, legend, input, textarea, button, select {
    margin: 0;
    padding: 0;
}


h1, h2, h3, h4, h5, h6, p, b, strong {
    font-weight: normal
}

img, fieldset {
    border: 0
}

ul, ol {
    list-style: none
}

a {
    text-decoration: none;
    color: #FFFFFF;
}

* {
    -webkit-tap-highlight-color: transparent
}

input::-webkit-input-placeholder {
    color: #cdcdcd
}

input:focus::-webkit-input-placeholder {
    color: #cdcdcd
}

body {
    -webkit-touch-callout: none;
    -webkit-user-select: none
}

body, html {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif
}
html,body,h1,h2,p,a,button{
    font-family: 'PingFangSC-Regular','Microsoft YaHei';
}
</style>
