<template>
  <div
    class="container content"
    style="padding:1.5rem;background:white;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);"
  >
    <div style="min-height:3.55rem"></div>
    <div class="has-text-centered">
      <h1 style="margin-top:.75rem">เลือกบุคลิกของคุณที่ใช่</h1>
      <p style="margin:0">เลือกได้ไม่จำกัด ยิ่งเลือกมากคำตอบจะชัดเจนมากขึ้น</p>
    </div>
    <div class="has-text-right">
      <b-button tag="router-link" :to="`/result/${personalityScoreResult}`" type="is-primary">
        <span>ดูผลลัพธ์</span>
        <b-icon icon="clipboard-check" size="is-small"></b-icon>
      </b-button>
    </div>
    <hr style="margin:0.75rem 0 1rem" />
    <div class="box">
      <div class="button-list">
        <b-checkbox-button
          v-model="personalityScore"
          v-for="(question,index) in questions"
          :key="index"
          :native-value="question"
          type="is-warning"
        >{{question.name}}</b-checkbox-button>
      </div>
    </div>
  </div>
</template>

<script>
import questionsFile from "@/assets/data/questions.js";

export default {
  name: "personality",
  created() {
    this.questions = this.shuffle(questionsFile);
  },
  data() {
    return {
      questions: null,
      personalityScore: []
    };
  },
  computed: {
    personalityScoreFiltered() {
      return this.personalityScore.map(data => data.type).sort();
    },
    personalityScoreCount() {
      return this.personalityScoreFiltered.reduce(
        (total, ptr) => (total[ptr]++, total),
        { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
      );
    },
    personalityScoreResult() {
      let result = "";
      let localPersonalityScoreCount = this.personalityScoreCount;
      // Check E
      if (localPersonalityScoreCount.E > localPersonalityScoreCount.I)
        result += "E";
      else if (localPersonalityScoreCount.E === localPersonalityScoreCount.I)
        result += "X";
      else result += "I";
      // Check S
      if (localPersonalityScoreCount.S > localPersonalityScoreCount.N)
        result += "S";
      else if (localPersonalityScoreCount.S === localPersonalityScoreCount.N)
        result += "X";
      else result += "N";
      // Check T
      if (localPersonalityScoreCount.T > localPersonalityScoreCount.F)
        result += "T";
      else if (localPersonalityScoreCount.T === localPersonalityScoreCount.F)
        result += "X";
      else result += "F";
      // Check J
      if (localPersonalityScoreCount.J > localPersonalityScoreCount.P)
        result += "J";
      else if (localPersonalityScoreCount.J === localPersonalityScoreCount.P)
        result += "X";
      else result += "P";
      return result;
    }
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>

<style lang="scss" scoped>
.box > .button-list {
  margin: -0.375rem;
  &::v-deep > .control {
    margin: 0.75rem;
  }
}
@media screen and (max-width: 768px) {
  .box > .button-list::v-deep > .control > .b-checkbox {
    white-space: normal;
    height: auto;
  }
}
@media screen and (min-width: 769px) {
  .box > .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &::v-deep > .control {
      margin: 0.375rem;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
}
</style>
