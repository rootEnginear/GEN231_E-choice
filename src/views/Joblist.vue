<template>
  <div
    class="container content"
    style="padding:1.5rem;background:white;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);"
  >
    <div style="min-height:3.55rem"></div>
    <h1 class="has-text-centered">ข้อมูลอาชีพ</h1>
    <hr />
    <div class="columns is-multiline">
      <div v-for="(job,index) in jobs" :key="index" class="column is-6">
        <router-link :to="`/job/${job}`">
          <article class="box">
            <div class="level is-mobile">
              <div class="level-left">{{job}}</div>
              <div class="level-right">
                <b-button type="is-primary" outlined>
                  <b-icon icon="info-circle" size="is-small"></b-icon>
                  <span class="is-hidden-mobile">รายละเอียด</span>
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
  name: "joblist",
  created() {
    this.jobs = Object.keys(occupationData.occupation);
  },
  data() {
    return {
      jobs: []
    };
  }
};
</script>