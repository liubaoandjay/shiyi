<template>
  <div id="app">
    <div class="wrap">
      <header class="header">
        <input type="text" />
      </header>
      <main class="main">
        <router-view />
      </main>
      <footer class="footer">
        <router-link to="/home">首页</router-link>
        <router-link to="/my">我的</router-link>
      </footer>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}
html,
body,
#app,
.wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrap {
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    height: 35px;
  }
  .main {
    flex: 1;
  }
  .footer {
    width: 100%;
    height: 35px;
  }
}
</style>
