<template>
  <div>
    <v-app-bar dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>投稿掲示板デモ</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav>
        <v-list-item-group v-model="drawerGroup">
          <DrawerItem></DrawerItem>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import DrawerItem from "./DrawerItem.vue";
export default {
  data: () => ({
    drawer: false,
    drawerGroup: null
  }),
  components: {
    DrawerItem
  },
  watch: {
    group() {
      this.drawer = false;
    }
  }
};
</script>



