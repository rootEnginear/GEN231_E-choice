<template>
  <div
    class="container content"
    style="padding:1.5rem;background:white;box-shadow:0 0.5em 1em -0.125em rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.02);"
  >
    <div style="min-height:3.55rem"></div>
    <h1 class="has-text-centered" style="margin:0;line-height:1.5">
      <small>คุณคือ...</small>
      <br />
      "{{personType.name}}"
    </h1>
    <p style="margin:0;text-align:center">
      {{personType.type}}
      <a @click="isInfoModalActive = !isInfoModalActive">ตัวอักษรนี้หมายถึงอะไร?</a>
    </p>
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
    <b-modal class="infoModal" :active.sync="isInfoModalActive" scroll="keep">
      <div class="box content">
        <article class="columns is-vcentered">
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/e.webp" type="image/webp" />
              <source srcset="@/assets/personality/e.png" type="image/png" />
              <img src="@/assets/personality/e.png" alt="Extrovert" />
            </picture>
            <header>ชอบเข้าสังคม (E)</header>
            <p>บุคคลเหล่านี้ชอบกิจกรรมกลุ่มและได้รับพลังจากการมีปฏิสัมพันธ์ทางสังคม พวกเขามักจะกระตือรือร้นและตื่นเต้นง่ายกว่าคนที่มีบุคลิกเก็บตัว</p>
          </div>
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/i.webp" type="image/webp" />
              <source srcset="@/assets/personality/i.png" type="image/png" />
              <img src="@/assets/personality/i.png" alt="Introvert" />
            </picture>
            <header>เก็บตัว (I)</header>
            <p>คนที่มีบุคลิกเก็บตัวชอบทำกิจกรรมเดี่ยวและเหนื่อยล้าจากการมีปฏิสัมพันธ์ทางสังคม โดยทั่วไป พวกเขามักจะไวต่อการกระตุ้นจากสิ่งเร้าภายนอก (เช่นเสียงภาพหรือกลิ่น)</p>
          </div>
        </article>
        <article class="columns is-vcentered">
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/s.webp" type="image/webp" />
              <source srcset="@/assets/personality/s.png" type="image/png" />
              <img src="@/assets/personality/s.png" alt="Observant" />
            </picture>
            <header>ช่างสังเกต (S)</header>
            <p>บุคลิกช่างสังเกตนั้นชอบการที่ได้ทำงานที่เน้นการปฏิบัติจริง พวกเขามักจะมีนิสัยที่เข้มแข็ง และมุ่งเน้นไปที่สิ่งที่เกิดขึ้นหรือเกิดขึ้นแล้ว</p>
          </div>
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/n.webp" type="image/webp" />
              <source srcset="@/assets/personality/n.png" type="image/png" />
              <img src="@/assets/personality/n.png" alt="Intuitive" />
            </picture>
            <header>เชื่อสัญชาตญาณ (N)</header>
            <p>บุคลิกนี้นั้นเป็นคนที่มีความคิดสร้างสรรค์อย่างมาก เป็นคนที่ใจกว้าง และขี้สงสัยพวกเขาชอบความแปลกใหม่มากกว่าความมั่นคงและมุ่งเน้นไปที่ความหมายที่ซ่อนอยู่และความเป็นไปได้ในอนาคต</p>
          </div>
        </article>
        <article class="columns is-vcentered">
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/t.webp" type="image/webp" />
              <source srcset="@/assets/personality/t.png" type="image/png" />
              <img src="@/assets/personality/t.png" alt="Thinking" />
            </picture>
            <header>มีเหตุผล (T)</header>
            <p>บุคลิกนี้มุ่งเน้นไปที่ความเที่ยงธรรมและความมีเหตุผล จัดลำดับความสำคัญของตรรกะมากกว่าอารมณ์ พวกเขามักจะซ่อนเร้นความรู้สึกและเห็นว่าประสิทธิภาพมีความสำคัญมากกว่าความร่วมมือ</p>
          </div>
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/f.webp" type="image/webp" />
              <source srcset="@/assets/personality/f.png" type="image/png" />
              <img src="@/assets/personality/f.png" alt="Feeling" />
            </picture>
            <header>ใช้ความรู้สึก (F)</header>
            <p>ความรู้สึกของบุคคลนั้นอ่อนไหวและแสดงออกทางอารมณ์ พวกเขามีความเอาใจใส่และแข่งขันน้อยกว่าประเภทความคิดและมุ่งเน้นไปที่ความสามัคคีและความร่วมมือทางสังคม</p>
          </div>
        </article>
        <article class="columns is-vcentered">
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/j.webp" type="image/webp" />
              <source srcset="@/assets/personality/j.png" type="image/png" />
              <img src="@/assets/personality/j.png" alt="Judging" />
            </picture>
            <header>ตัดสิน (J)</header>
            <p>การตัดสินบุคคลนั้นแตกหักละเอียดและจัดระเบียบอย่างมาก พวกเขาเห็นคุณค่าความชัดเจนการคาดการณ์และการปิดการเลือกโครงสร้างและการวางแผนเพื่อความเป็นธรรมชาติ</p>
          </div>
          <div class="column is-6">
            <picture>
              <source srcset="@/assets/personality/p.webp" type="image/webp" />
              <source srcset="@/assets/personality/p.png" type="image/png" />
              <img src="@/assets/personality/p.png" alt="Prospecting" />
            </picture>
            <header>โอกาส (P)</header>
            <p>บุคคลที่คาดหวังนั้นเก่งในเรื่องการปรับตัวและโอกาสในการมองเห็น พวกเขามีแนวโน้มที่จะมีความยืดหยุ่นและผ่อนคลายผู้ไม่ลงรอยกันที่ต้องการเปิดทางเลือกต่าง ๆ</p>
          </div>
        </article>
      </div>
    </b-modal>
  </div>
</template>

<script>
import occupationData from "@/assets/data/data.js";

export default {
  name: "result",
  created() {
    document.title = `✅ E-choice - คุณคือ "${this.personType.name}"`;
  },
  data() {
    return {
      isInfoModalActive: false
    };
  },
  computed: {
    personType() {
      let type = this.$route.params.type;
      let personalityPossibility = [[], [], [], []];
      let typesEnum = ["EI", "SN", "TF", "JP"];
      for (let i = 0; i < 4; i++) {
        if (type[i] === "X") {
          personalityPossibility[i].push(typesEnum[i][0]);
          personalityPossibility[i].push(typesEnum[i][1]);
        } else {
          personalityPossibility[i].push(type[i]);
        }
      }
      const f = (a, b) => [].concat(...a.map(d => b.map(e => [].concat(d, e))));
      const cartesian = (a, b, ...c) => (b ? cartesian(f(a, b), ...c) : a);
      let personality = cartesian(...personalityPossibility).map(v =>
        v.join("")
      );
      let availableOccupationData = occupationData.data.filter(entry =>
        personality.includes(entry.type)
      );
      let unionData = { type: "", name: "", job: [] };
      availableOccupationData.forEach(el => {
        unionData.type = [unionData.type, el.type].join("/");
        unionData.name = [unionData.name, el.name].join("/");
        unionData.job = [...new Set(unionData.job.concat(el.job))];
      });
      unionData.type = unionData.type.substr(1);
      unionData.name = unionData.name.substr(1);
      unionData.job = unionData.job.sort();
      return unionData;
    }
  }
};
</script>

<style lang="scss" scoped>
.infoModal::v-deep {
  header {
    text-align: center;
    font-size: 2em;
    margin-bottom: 0.5em;
    font-weight: 600;
    line-height: 1.125;
  }
  picture > img {
    max-height: 40vh;
    margin: auto;
    display: block;
  }
}
</style>