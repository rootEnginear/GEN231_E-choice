<template>
  <div class="container content">
    <div style="min-height:3.25rem"></div>
    <h1 class="has-text-centered">{{$route.params.name}}</h1>
    <hr />
    <article class="box" v-for="(dep,i) in departments" :key="i">
      <h1>{{dep.name}}</h1>
      <ul>
        <li v-for="(place,j) in dep.places" :key="j">
          <a :href="place.link">{{place.name}}</a>
        </li>
      </ul>
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