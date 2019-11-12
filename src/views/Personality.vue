<template>
  <div class="container content">
    <div style="min-height:3.25rem"></div>
    <h1 class="has-text-centered">เลือกบุคลิกของคุณที่ใช่</h1>
    <transition-group name="fade">
      <b-field id="ei" class="radio-button is-fullwidth" :key="0">
        <b-radio-button v-model="ei" native-value="1" type="is-primary">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/i.webp" type="image/webp" />
              <source srcset="@/assets/personality/i.png" type="image/png" />
              <img src="@/assets/personality/i.png" alt="Introvert" />
            </picture>
            <header>เก็บตัว (I)</header>
            <p>คนที่มีบุคลิกเก็บตัวชอบทำกิจกรรมเดี่ยวและเหนื่อยล้าจากการมีปฏิสัมพันธ์ทางสังคม โดยทั่วไป พวกเขามักจะไวต่อการกระตุ้นจากสิ่งเร้าภายนอก (เช่นเสียงภาพหรือกลิ่น)</p>
          </article>
        </b-radio-button>
        <b-radio-button v-model="ei" native-value="0" type="is-primary">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/e.webp" type="image/webp" />
              <source srcset="@/assets/personality/e.png" type="image/png" />
              <img src="@/assets/personality/e.png" alt="Extrovert" />
            </picture>
            <header>ชอบเข้าสังคม (E)</header>
            <p>บุคคลเหล่านี้ชอบกิจกรรมกลุ่มและได้รับพลังจากการมีปฏิสัมพันธ์ทางสังคม พวกเขามักจะกระตือรือร้นและตื่นเต้นง่ายกว่าคนที่มีบุคลิกเก็บตัว</p>
          </article>
        </b-radio-button>
      </b-field>
      <b-field v-if="ei" id="sn" class="radio-button is-fullwidth" :key="1" style="margin:2rem 0">
        <b-radio-button v-model="sn" native-value="0" type="is-info">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/s.webp" type="image/webp" />
              <source srcset="@/assets/personality/s.png" type="image/png" />
              <img src="@/assets/personality/s.png" alt="Observant" />
            </picture>
            <header>ช่างสังเกต (S)</header>
            <p>บุคลิกช่างสังเกตนั้นชอบการที่ได้ทำงานที่เน้นการปฏิบัติจริง พวกเขามักจะมีนิสัยที่เข้มแข็ง และมุ่งเน้นไปที่สิ่งที่เกิดขึ้นหรือเกิดขึ้นแล้ว</p>
          </article>
        </b-radio-button>
        <b-radio-button v-model="sn" native-value="1" type="is-info">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/n.webp" type="image/webp" />
              <source srcset="@/assets/personality/n.png" type="image/png" />
              <img src="@/assets/personality/n.png" alt="Intuitive" />
            </picture>
            <header>เชื่อสัญชาตญาณ (N)</header>
            <p>บุคลิกนี้นั้นเป็นคนที่มีความคิดสร้างสรรค์อย่างมาก เป็นคนที่ใจกว้าง และขี้สงสัยพวกเขาชอบความแปลกใหม่มากกว่าความมั่นคงและมุ่งเน้นไปที่ความหมายที่ซ่อนอยู่และความเป็นไปได้ในอนาคต</p>
          </article>
        </b-radio-button>
      </b-field>
      <b-field v-if="sn" id="tf" class="radio-button is-fullwidth" :key="2" style="margin:2rem 0">
        <b-radio-button v-model="tf" native-value="0" type="is-warning">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/t.webp" type="image/webp" />
              <source srcset="@/assets/personality/t.png" type="image/png" />
              <img src="@/assets/personality/t.png" alt="Thinking" />
            </picture>
            <header>มีเหตุผล (T)</header>
            <p>บุคลิกนี้มุ่งเน้นไปที่ความเที่ยงธรรมและความมีเหตุผล จัดลำดับความสำคัญของตรรกะมากกว่าอารมณ์ พวกเขามักจะซ่อนเร้นความรู้สึกและเห็นว่าประสิทธิภาพมีความสำคัญมากกว่าความร่วมมือ</p>
          </article>
        </b-radio-button>
        <b-radio-button v-model="tf" native-value="1" type="is-warning">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/f.webp" type="image/webp" />
              <source srcset="@/assets/personality/f.png" type="image/png" />
              <img src="@/assets/personality/f.png" alt="Feeling" />
            </picture>
            <header>ใช้ความรู้สึก (F)</header>
            <p>ความรู้สึกของบุคคลนั้นอ่อนไหวและแสดงออกทางอารมณ์ พวกเขามีความเอาใจใส่และแข่งขันน้อยกว่าประเภทความคิดและมุ่งเน้นไปที่ความสามัคคีและความร่วมมือทางสังคม</p>
          </article>
        </b-radio-button>
      </b-field>
      <b-field v-if="tf" id="jp" class="radio-button is-fullwidth" :key="3" style="margin:2rem 0">
        <b-radio-button v-model="jp" native-value="0" type="is-e-violet">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/j.webp" type="image/webp" />
              <source srcset="@/assets/personality/j.png" type="image/png" />
              <img src="@/assets/personality/j.png" alt="Judging" />
            </picture>
            <header>ตัดสิน (J)</header>
            <p>การตัดสินบุคคลนั้นแตกหักละเอียดและจัดระเบียบอย่างมาก พวกเขาเห็นคุณค่าความชัดเจนการคาดการณ์และการปิดการเลือกโครงสร้างและการวางแผนเพื่อความเป็นธรรมชาติ</p>
          </article>
        </b-radio-button>
        <b-radio-button v-model="jp" native-value="1" type="is-e-violet">
          <article class="choice">
            <picture>
              <source srcset="@/assets/personality/p.webp" type="image/webp" />
              <source srcset="@/assets/personality/p.png" type="image/png" />
              <img src="@/assets/personality/p.png" alt="Prospecting" />
            </picture>
            <header>โอกาส (P)</header>
            <p>บุคคลที่คาดหวังนั้นเก่งในเรื่องการปรับตัวและโอกาสในการมองเห็น พวกเขามีแนวโน้มที่จะมีความยืดหยุ่นและผ่อนคลายผู้ไม่ลงรอยกันที่ต้องการเปิดทางเลือกต่าง ๆ</p>
          </article>
        </b-radio-button>
      </b-field>
      <div v-if="jp" :key="4" class="has-text-centered">
        <br />
        <b-button
          tag="router-link"
          :to="`/result/${parseInt(`${ei}${sn}${tf}${jp}`,2)}`"
          size="is-large"
          type="is-primary"
        >
          <span>ดูผลลัพธ์</span>
          <b-icon size="is-small" icon="clipboard-check"></b-icon>
        </b-button>
        <br />
        <br />
        <br />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "personality",
  data() {
    return {
      ei: null,
      sn: null,
      tf: null,
      jp: null
    };
  },
  methods: {
    scrollBottom() {
      window.scroll({ top: 9999, left: 0, behavior: "smooth" });
    }
  },
  watch: {
    ei() {
      setTimeout(() => this.scrollBottom(), 500);
    },
    sn() {
      setTimeout(() => this.scrollBottom(), 500);
    },
    tf() {
      setTimeout(() => this.scrollBottom(), 500);
    },
    jp() {
      setTimeout(() => this.scrollBottom(), 500);
    }
  }
};
</script>

<style lang="scss" scoped>
.radio-button.is-fullwidth::v-deep > .control {
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  & > label {
    white-space: initial;
    height: 100%;
    padding: 1rem;
    header {
      font-size: 2em;
      margin-bottom: 0.5em;
      font-weight: 600;
      line-height: 1.125;
    }
  }
}
.choice > picture > img {
  max-height: 40vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
