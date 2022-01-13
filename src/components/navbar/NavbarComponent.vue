<template lang="pug">
  nav
    v-app-bar(app, dark, color="#28292D")
      v-container(fluid).d-flex.flex-row
        v-app-bar-nav-icon.d-flex.d-lg-none.mt-2(@click="drawerMenu = true")
        v-container.logo(@click="goHome") torre.co
        v-spacer
        v-container.d-flex.flex-row.align-center.justify-end
          v-icon.mx-2 mdi-magnify
          .link-sign-in SIGN IN
    v-navigation-drawer.d-flex.d-lg-none(v-model="drawerMenu" fixed, temporary, dark, color="#28292D")
      v-list(nav='' dense='')
        v-list-item(@click="goHome")
          v-list-item-avatar
            v-img(src='../../assets/images/logo.png')
          v-list-item-content.logo torre.co
        v-divider
        v-list-item-group(v-model="groupMenu" active-class='gray--text text--accent-1')
          v-list-item
            v-list-item-icon
              v-icon mdi-magnify
            v-list-item-title Search
          v-list-item
            v-list-item-icon
              v-icon mdi-bullhorn
            v-list-item-title Post a job
          v-list-item
            v-list-item-icon
              v-icon mdi-briefcase
            v-list-item-title Your jobs
          v-list-item
            v-list-item-icon
              v-icon mdi-account
            v-list-item-title Your genome
          v-list-item
            v-list-item-icon
              v-icon mdi-account-plus
            v-list-item-title Signals
          v-list-item
            v-list-item-icon
              v-icon mdi-forum
            v-list-item-title Messages
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "NavbarComponent",
  data: () => ({
    drawerMenu: false as boolean,
    groupMenu: null,
  }),
  methods: {
    goHome() {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    },
  },
  watch: {
    groupmenu() {
      this.drawerMenu = false;
    },
  },
});
</script>
<style scoped>
.logo {
  font-size: 25px;
}
.link-sign-in {
  color: #cddc39;
}
</style>
