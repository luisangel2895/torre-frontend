<template lang="pug">
  v-container(fluid).general-container.white--text
    v-container.text-center
      img.rounded-circle(:src="image" width="40%")
    v-container
      .text-center.title {{name}}
      .text-center.subtitle @{{this.$route.params.username}}
    v-container
      .title-skills Skills and interests
    v-container(v-if="masterSkills.length")
      .title-skill.d-flex.flex-row
        v-icon.white--text mdi-battery-charging
        .title-skill-level Master / Influencer
      v-container
        skill-component(v-for="(masterSkill,index) in masterSkills" :key="index" :skill="masterSkill")
      v-divider.white
    v-container(v-if="expertSkills.length")
      .title-skill.d-flex.flex-row
        v-icon.white--text mdi-battery-80
        .title-skill-level Expert
      v-container
        skill-component(v-for="(expertSkill,index) in expertSkills" :key="index" :skill="expertSkill")
      v-divider.white
    v-container(v-if="proficientSkills.length")
      .title-skill.d-flex.flex-row
        v-icon.white--text mdi-battery-high
        .title-skill-level Proficient
      v-container
        skill-component(v-for="(proficientSkill,index) in proficientSkills" :key="index" :skill="proficientSkill")
      v-divider.white
    v-container(v-if="novicetSkills.length")
      .title-skill.d-flex.flex-row
        v-icon.white--text mdi-battery-medium
        .title-skill-level Novice
      v-container
        skill-component(v-for="(novicetSkill,index) in novicetSkills" :key="index" :skill="novicetSkill")
      v-divider.white
    v-container(v-if="noExperienceSkills.length")
      .title-skill.d-flex.flex-row
        v-icon.white--text mdi-battery-low
        .title-skill-level Not experience but interested
      v-container
        skill-component(v-for="(noExperienceSkill,index) in noExperienceSkills" :key="index" :skill="noExperienceSkill")
      v-divider.white

</template>

<script lang="ts">
import Vue from "vue";
import SkillComponent from "../components/profile/SkillComponent.vue";

import { mapGetters, mapState } from "vuex";

export default Vue.extend({
  name: "Profile",
  components: {
    SkillComponent,
  },
  computed: {
    ...mapGetters([
      "masterSkills",
      "expertSkills",
      "proficientSkills",
      "novicetSkills",
      "noExperienceSkills",
    ]),
    ...mapState(["name", "image"]),
  },
  mounted() {
    window.scroll(0, 0);
  },
});
</script>
<style scoped>
.general-container {
  background-color: #28292d;
}
.title {
  font-size: 18px;
}
.title-skill-level {
  color: #acacb1;
}
</style>
