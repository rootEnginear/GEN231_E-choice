<template>
  <div class="home">
    <section class="hero is-fullheight">
      <div class="hero-body" style="justify-content:center">
        <div class="has-text-centered">
          <picture style="display:block;margin:auto">
            <source srcset="@/assets/logo.webp" type="image/webp" />
            <source srcset="@/assets/logo.png" type="image/png" />
            <img src="@/assets/logo.png" alt="E-choice" style="max-height:50vh;max-width:50vw" />
          </picture>
          <b-button
            tag="router-link"
            to="/personality"
            type="is-primary"
            size="is-large"
            style="margin-top:.75rem"
          >🧪 เริ่มทำแบบทดสอบ</b-button>
          <br />
          <b-button tag="router-link" to="/job" style="margin-top:.75rem">
            <b-icon icon="info-circle" size="is-small"></b-icon>
            <span>ดูข้อมูลอาชีพ</span>
          </b-button>
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