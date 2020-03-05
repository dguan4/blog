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

<style lang="scss">
html,
body {
  font-family: "Rubik", Arial, Helvetica, sans-serif;
}
body {
  margin: 0;
  background-color: $color-background;
  color: $color-text;
}
</style>
