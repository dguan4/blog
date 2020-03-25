<template>
  <div class="container">
    <div class="hero">
      <h2>
        Welcome to my Blog
      </h2>


    </div>
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

  &-long {
    height: 500px;
  }
}

.hero {
  min-height: 40vh;
  width: 100%;
  // animation: background 7s linear infinite;
  padding-top: 4rem;
}
</style>
