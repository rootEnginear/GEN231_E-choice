<template>
  <div id="app">
    <transition name="nav">
      <nav
        v-if="loaded && this.$route.path !== '/'"
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="container">
          <div class="navbar-menu">
            <div class="navbar-start">
              <a class="navbar-item" @click="$router.go(-1)">
                <b-icon pack="fas" icon="chevron-left" size="is-small"></b-icon>&nbsp;&nbsp;&nbsp;กลับ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </transition>
    <transition name="routerview">
      <router-view />
    </transition>
    <transition name="gotop">
      <b-button
        tag="a"
        v-if="loaded && notAtTop"
        id="gotop"
        type="is-primary"
        rounded
        @click="scrollTop"
      >
        <span class="is-hidden-tablet">กลับขึ้นด้านบน</span>
      </b-button>
    </transition>
  </div>
</template>

<script>
import debounce from "lodash.debounce";

export default {
  created() {
    this.handleScroll = debounce(() => {
      if (window.scrollY >= document.documentElement.clientHeight / 2 - 52) {
        this.notAtTop = true;
      } else {
        this.notAtTop = false;
      }
    }, 500);
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.loaded = true;
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      handleScroll: null,
      loaded: false,
      notAtTop: false
    };
  },
  methods: {
    scrollTop() {
      window.scroll({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";

$primary: #23c7ac;
$primary-invert: findColorInvert($primary);
$danger: #c7233e;
$danger-invert: findColorInvert($danger);
$success: #23c75a;
$success-invert: findColorInvert($success);
$info: #2390c7;
$info-invert: findColorInvert($info);
$warning: #fdd835;
$warning-invert: findColorInvert($warning);
$e-blue: #233ec7;
$e-blue-invert: findColorInvert($e-blue);
$e-violet: #ac23c7;
$e-violet-invert: findColorInvert($e-violet);

$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "e-blue": (
    $e-blue,
    $e-blue-invert
  ),
  "e-violet": (
    $e-violet,
    $e-violet-invert
  )
);

$family-primary: "Sarabun", BlinkMacSystemFont, -apple-system, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", "Helvetica", "Arial", sans-serif;
$body-line-height: 1.7;
$body-size: 17px;

@import "~bulma";
@import "~buefy/src/scss/buefy";

.nobr {
  display: inline-block;
  white-space: nowrap;
}

#gotop {
  position: fixed;
  bottom: 5vh;
  right: 2.5vw;
  z-index: 10;

  &::after {
    width: 10px;
    transform: rotate(45deg);
    transform-origin: center center;
    margin: 0.1rem 0;
    height: 10px;
    display: block;
    content: "";
    border-top: 3px solid #fff;
    border-left: 3px solid #fff;
    position: absolute;
  }

  @media screen and (max-width: 769px) {
    bottom: 0;
    left: 0;
    right: 0;
    background: #000000d9;
    color: #fff;
    border: none;
    border-radius: 0;

    &:focus:not(:active) {
      box-shadow: 0 0 0 0.125em rgba(0, 0, 0, 0.25);
    }

    &::after {
      margin: 0.25rem 1rem 0;
      position: static;
    }
  }

  @media print {
    display: none;
  }
}

.navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
  -ms-flex-align: stretch;
  align-items: stretch;
  display: -ms-flexbox;
  display: flex;
}
.navbar {
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
}
.navbar-menu {
  box-shadow: none;
}

.container {
  width: 90%;
}

#app {
  background: url("assets/bg/bg.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  background-attachment: fixed;
  // transition: background-size 1s ease;
}

// Transision
.routerview-enter-active,
.navregis-enter-active {
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active,
.navregis-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.routerview-enter-active,
.nav-enter-active,
.gotop-enter-active {
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}
.routerview-leave-active,
.nav-leave-active,
.gotop-leave-active {
  transition: transform 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.routerview-enter-active,
.routerview-leave-active {
  transition-property: transform, opacity;
  transition-duration: 0.5s;
}
// Slide for router-view
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
// .routerview-leave-to {
//   transform: translateY(-100vw);
// }
.routerview-enter {
  transform: translateY(100vh);
}
// fade for nav-regis
.navregis-enter,
.navregis-leave-to,
.routerview-leave-to,
.routerview-enter {
  opacity: 0;
}
// slide up/down for gotop
.gotop-enter,
.gotop-leave-to {
  transform: translateY(5vh) translateY(100%);
}
// slidedown for navbar
.nav-enter,
.nav-leave-to {
  transform: translateY(-100%);
}
</style>
