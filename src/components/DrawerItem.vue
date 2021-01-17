<template>
  <div>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-account</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Account</v-list-item-title>
    </v-list-item>
  </div>
</template>


<script>
export default {
  props: ["drawer", "drawerGroup"]
};
</script>

