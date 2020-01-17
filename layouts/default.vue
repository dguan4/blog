<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "~/components";
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
