<template>
  <div id="app">
    <b-navbar class="is-fixed-top" :shadow="true">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item tag="router-link" to="/">Home</b-navbar-item>
        <b-navbar-item tag="router-link" to="/about">About</b-navbar-item>
      </template>
    </b-navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>-->
    <transition name="routerview">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.routerview-enter-active {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.routerview-leave-to {
  transform: translateX(-100vw);
}
.routerview-enter {
  transform: translateY(100vh);
}
.routerview-leave-to,
.routerview-enter {
  opacity: 0;
}
.routerview-enter-active,
.routerview-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
}
.routerview-enter-active,
.routerview-leave-active,
.routerview-enter,
.routerview-leave-to {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform-origin: top left;
}
</style>
