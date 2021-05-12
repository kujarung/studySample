<template>
  <div class="about">
    <h1>This is an about page</h1>
    <table>
      <tr
        v-for="(item, index) in noticeList"
        :key="item.id"
        @click="goDetail(item)"
      >
        <td>
          {{ index }}
        </td>
        <td>
          {{ item.auditUserName }}
        </td>
        <td v-html="item.content"></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Notice",
  data() {
    return {
      noticeList: []
    };
  },
  created() {
    this.getNotices();
  },
  methods: {
    goDetail(value) {
      this.$router.push({
        path: `/notice/${value.id}`
      });
    },
    getNotices() {
      const apiURL = `${this.ENV_CRM}/reference-center`;
      const option = {
        page: 0,
        size: 15,
        categoryId: "cb8a1f19-69d8-11eb-b9da-0242ac110008",
        sort: "createdTime,desc"
      };
      this.$http({
        method: "get",
        url: apiURL,
        params: {
          ...option
        }
      })
        .then(result => {
          console.log(result);
          this.noticeList = result.data.content;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
table tr {
  cursor: pointer;
}
</style>
