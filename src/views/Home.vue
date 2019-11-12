<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body" style="justify-content:center">
        <div class="has-text-centered">
          <picture style="display:block;margin:auto">
            <source srcset="@/assets/placeholder_logo.webp" type="image/webp" />
            <source srcset="@/assets/placeholder_logo.png" type="image/png" />
            <img
              src="@/assets/placeholder_logo.png"
              alt="E-choice"
              style="max-height:50vh;max-width:50vw"
            />
          </picture>
          <br />
          <b-button
            tag="router-link"
            to="/personality"
            type="is-primary"
            size="is-large"
          >เริ่มทำแบบทดสอบ 🧪</b-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>