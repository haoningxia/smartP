<template>
  <div id="app" class="smart-container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  font-size: 14px;
  background-color: #f4f7fa;
  overflow-x: hidden;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: top;
  border:none;
}
.Menubar{
  height: 50px;
  border-bottom: 1px solid #ccc;
  background: #fff;
}
</style>


