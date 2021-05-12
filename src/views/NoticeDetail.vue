<template>
  <div class="about">
    <h1>This is an noticeDetail page</h1>
    <fieldset>
      <div class="formRow row-4">
        <div class="column column-2">
          <label for="title">카테고리</label>
          <select
            id="카테고리"
            class="gradient"
            v-model="detailForm.categoryId"
            disabled
          >
            <option value="">선택</option>
            <option
              :value="item.id"
              v-for="(item, index) in categoryList"
              :key="index"
              >{{ item.text }}</option
            >
          </select>
        </div>
        <div class="column column-2">
          <label for="title">제목</label>
          <input
            id="title"
            type="text"
            placeholder="제목"
            v-model="detailForm.title"
          />
        </div>
      </div>
      <div class="formRow row-2">
        <div class="column">
          <label for="writer">작성자</label>
          <input
            id="writer"
            type="text"
            :value="detailForm.auditUserName"
            disabled
          />
        </div>
        <div class="column">
          <label for="createdTime">작성일</label>
          <input
            id="createdTime"
            type="text"
            :value="detailForm.createdTimePretty"
            disabled
          />
        </div>
      </div>
      <div class="formRow">
        <div class="column">
          <Editor
            v-if="detailForm.content !== ''"
            id="editor"
            bucket="home"
            :init="detailForm.content"
            @onContentChanged="content => (detailForm.content = content)"
          />
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
import Editor from "../components/Editor";
export default {
  computed: {
    _detailId() {
      return this.$route.params.detailId;
    }
  },
  components: {
    Editor
  },
  name: "NoticeDetail",
  data() {
    return {
      categoryList: "",
      detailForm: {
        categoryInfo: {
          text: ""
        },
        title: "",
        viewYn: "",
        content: ""
      }
    };
  },
  created() {
    this.getNoticesCategory();
    this.getNotice();
  },
  methods: {
    getNoticesCategory() {
      const apiURL = `${this.ENV_CRM}/reference-center/category`;
      this.$http({
        method: "get",
        url: apiURL
      })
        .then(result => {
          this.categoryList = result.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getNotice() {
      const apiURL = `${this.ENV_CRM}/reference-center/` + this._detailId;
      this.$http({
        method: "get",
        url: apiURL
      })
        .then(result => {
          this.detailForm = result.data;
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
</style>
