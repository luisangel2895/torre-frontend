<template lang="pug">
    v-dialog(v-model='dialog' fullscreen, hide-overlay, transition="dialog-bottom-transition")
        template(v-slot:activator='{ on, attrs }')
            v-btn.ma-1(small, rounded v-bind='attrs' v-on='on') {{ skill.name }}
        v-card.card-skill
            v-toolbar(dark='' color='#28292D')
                v-btn(icon='' dark='' @click='dialog = false')
                    v-icon mdi-close
                v-toolbar-title {{ skill.name }}
                v-spacer
            v-container.my-4
                .d-flex.flex-row.align-center
                    .text-level.my-2 Proficiency: 
                    .text-skill {{ skill.proficiency }}
                .d-flex.flex-row.align-center
                    .text-recomendations.my-2 Recomendations:
                    .text-skill {{skill.recommendations}}
            v-divider.white
         

</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SkillComponent",
  props: {
    skill: {},
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    showSkill: (): void => {
      console.log("generic skill");
    },
  },
});
</script>
<style scoped>
.card-skill {
  background-color: #28292d;
  color: white;
}
.text-level {
  color: #acacb1;
}
.text-recomendations {
  color: #acacb1;
}
</style>
