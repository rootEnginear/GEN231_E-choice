<template>
  <div
    class="container content"
    style="padding:1.5rem;background:white;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);"
  >
    <div style="min-height:3.55rem"></div>
    <h1 class="has-text-centered">{{$route.params.name}}</h1>
    <hr />
    <article class="message is-primary" v-for="(dep,i) in departments" :key="i">
      <div class="message-body">
        <h1>{{dep.name}}</h1>
        <ul>
          <li v-for="(place,j) in dep.places" :key="j">
            <a :href="place.link">{{place.name}}</a>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import occupationData from "@/assets/data/data.js";

export default {
  name: "job",
  created() {
    document.title = `✅ E-choice - ${this.$route.params.name}`;
  },
  computed: {
    departments() {
      return occupationData.occupation[this.$route.params.name];
    }
  }
};
</script>

<style>
</style>