<template>
  <LoginHeader></LoginHeader>
  <Header></Header>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer></Footer>
</template>

<script>
import LoginHeader from "@/components/loginheader.vue";
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  components: {
    LoginHeader,
    Header,
    Footer,
  },
};
</script>
<style></style>
