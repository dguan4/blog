<template>
  <div class="container">
    <div class="container-long">test</div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ]
    };
  },
  components: {
    Logo
  }
};
</script>

<style lang="scss">
.container {
  max-width: 1600px;

  &-long {
    height: 500px;
  }
}
</style>
