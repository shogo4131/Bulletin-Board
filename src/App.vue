<template>
  <div id="app">
    <v-app>
      <Header></Header>
      <Content></Content>
    </v-app>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    Header,
    Content
  }
};
</script>


