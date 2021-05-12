<template>
  <div>
    <ToastVueEditor
      :ref="id"
      :options="editorOptions"
      :initialValue="init"
      height="500px"
      initialEditType="wysiwyg"
      previewStyle="vertical"
      @load="onEditorLoad"
      @change="onContentChanged"
    />

    <!-- Create Example -->
    <!-- <Editor
      id="editor"
      bucket="home"
      @onContentChanged="content => createForm.content = content"
    /> -->

    <!-- Detail Example -->
    <!-- <Editor
      v-if="detailForm.content !== ''"
      id="editor"
      bucket="home"
      :init="detailForm.content"
      @onContentChanged="content => detailForm.content = content"
    /> -->
  </div>
</template>

<script>
export default {
  name: "Editor",
  props: {
    id: {
      type: String,
      required: true,
      default: () => "editor"
    },
    bucket: {
      type: String,
      required: true,
      default: () => "editor"
    },
    init: {
      type: String,
      required: false,
      default: () => null
    }
  },
  data() {
    return {
      editorOptions: {
        hideModeSwitch: true,
        language: "ko",
        toolbarItems: [
          "heading",
          "bold",
          "italic",
          "strike",
          "divider",
          "hr",
          "quote",
          "divider",
          "ul",
          "ol",
          "task",
          "divider",
          "table",
          "image",
          "link",
          "divider"
        ],
        hooks: {
          addImageBlobHook: async (blob, callback) => {
            const [url, altName] = await this.uploadImage(blob);
            callback(url, altName);
            return false;
          }
        }
      }
    };
  },
  methods: {
    onEditorLoad() {},
    onContentChanged() {
      this.$emit("onContentChanged", this.$refs[this.id].invoke("getHtml"));
    },
    uploadImage(blob) {
      return new Promise((resolve, reject) => {
        console.log("blob", blob);
        const data = new FormData();

        data.append("file", blob);
        data.append("fileName", blob.name);
        data.append("alias", blob.name);

        const apiURL = `${this.ENV_CONTENTS}/objects/kr.co.mrkim.${
          this.bucket
        }/${this.COMMON.UUID()}`;

        this.$http({
          method: "post",
          url: apiURL,
          data
        })
          .then(result => {
            return resolve([result.data.url, result.data.alias]);
          })
          .catch(error => {
            return reject(error);
          });
      });
    }
  }
};
</script>

<style></style>
