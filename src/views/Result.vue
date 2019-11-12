<template>
  <div class="container content">
    <div style="min-height:3.25rem"></div>
    <h1 class="has-text-centered">คุณคือ "{{personType.name}}" ({{personType.type}})</h1>
    <hr />
    <div class="columns is-multiline">
      <div v-for="(job,index) in personType.job" :key="index" class="column is-6">
        <router-link :to="`/job/${job}`">
          <article class="box">
            <div class="level">
              <div class="level-left">{{job}}</div>
              <div class="level-right">
                <b-button type="is-primary" outlined>
                  <b-icon icon="info-circle" size="is-small"></b-icon>
                  <span>รายละเอียด</span>
                </b-button>
              </div>
            </div>
          </article>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import occupationData from "@/assets/data/data.js";

export default {
  name: "result",
  created() {
    document.title = `✅ E-choice - คุณคือ "${occupationData.data[this.$route.params.index].name}"`;
  },
  computed: {
    personType() {
      return occupationData.data[this.$route.params.index];
    }
  }
};
</script>