<template>
  <img class="main_img" src="../static/img/main_320.jpg" />
</template>
<script>
export default {
  data() {
    return {
      testData: "test",
    };
  },
  created() {},
  methods: {
    testToHelloWorld() {
      if (this.testData === "test") this.testData = "HelloWorld";
      else this.testData = "test";
    },
  },
};
</script>
<style scoped></style>
