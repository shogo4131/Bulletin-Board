<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card-text>
          <v-text-field label="お名前" v-model="name" outlined></v-text-field>
          <v-textarea label="コメント" v-model="comment" outlined></v-textarea>
          <v-btn @click="createdComment">サーバーへ送信する</v-btn>
          <h1 style="margin-top:20px;">掲示板</h1>
        </v-card-text>
        <v-list-item v-for="dataList in dataLists" :key="dataList.name">
          <v-list-item-content>名前： {{dataList.fields.name.stringValue}}</v-list-item-content>
          <v-list-item-content>コメント： {{dataList.fields.comment.stringValue}}</v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    name: "",
    comment: null,
    dataLists: []
  }),
  created() {
    axios
      .get("/comments")
      .then(response => {
        this.dataLists = response.data.documents;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    createdComment() {
      axios.post("/comments", {
        fields: {
          name: {
            stringValue: this.name
          },
          comment: {
            stringValue: this.comment
          }
        }
      });
      this.name = "";
      this.comment = "";
    }
  }
};
</script>