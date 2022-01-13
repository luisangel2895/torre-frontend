<template lang="pug">
  v-container.global-container.pa-0(fluid)
    v-img(src='../assets/images/front.jpg')
    v-container
      .main-title Your matching network fo work
      .main-text.mt-4 Torre makes the process of finding work and finding talent tranparent and automated
    v-container
      v-btn(large,rounded, color="#CDDC39", block) FIND WORK
    v-container
      v-btn(large,rounded, color="#CDDC39", block) POST A JOB
    v-container.pa-5
      .text__title Why we started Torre
      .text__text.mt-3.white--text The internet significantly reduced the asymmetry of our gaining and exchanging information. Previously, discovering worthwhile sources of knowledge about any given topic took weeks of research, often including multiple visits to libraries, slow letters, and expensive phone calls. Today, it only takes a few seconds to search and discover what books to buy, articles to read, videos to watch, experts to follow, and online classes to take. Booking a flight or buying pretty much any product can now be done in seconds while lazing on a couch.
    .text__title Learn about our journey
    v-container.mt-5
      video(width='100%' controls='')
        source(src="../assets/video/torre.mp4" type='video/mp4')
    v-container
      .text__title Our best developers
      v-card.mx-auto.my-4(max-width='344' outlined='')
        v-list-item(three-line='')
          v-list-item-content
            .text-overline.mb-4
              | CEO
            v-list-item-title.text-h6.mb-1
              | {{name}}
            v-list-item-subtitle {{headline}}
     
          img(:src="image" width="50px")
        v-card-actions
          v-btn(rounded, block, color="#CDDC39" @click="goProfile")
            | Go to profile

</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";

export default Vue.extend({
  name: "Home",
  computed: {
    ...mapState(["name", "image", "headline"]),
  },
  methods: {
    goProfile() {
      this.$router.push({
        name: "Profile",
        params: {
          username: "torrenegra",
        },
      });
    },
  },
  mounted() {
    // This is the code to receive the data for the developers in the App component, but
    // the server have problem with CORS polily
    // this.$store
    //   .dispatch("getDevelopersAPI", null, { root: true })
    //   .then(console.log);
  },
});
</script>
<style scoped>
.main-title {
  color: white;
  text-align: center;
  font-size: 40px;
  line-height: 1.2;
  font-weight: bold;
}
.main-text {
  color: white;
  text-align: center;
  font-size: 18px;
}
</style>
<style scoped>
.global-container {
  background-color: #27292d;
}
.text__title {
  text-align: center;
  font-size: 19px;
  color: white;
}
</style>
