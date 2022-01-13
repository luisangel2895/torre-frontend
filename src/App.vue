<template lang="pug">
v-app(id="app")
  navbar-component
  v-main
    router-view
</template>

<script lang="ts">
import Vue from "vue";
import NavbarComponent from "./components/navbar/NavbarComponent.vue";

export default Vue.extend({
  name: "App",
  components: {
    NavbarComponent,
  },
});
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro&family=Mulish:wght@700&family=Roboto:wght@300&display=swap");
#app {
  font-family: "Be Vietnam Pro", sans-serif;
}
.logo__text {
  color: red;
}
.logo__text_2 {
  color: blue;
}
</style>
