<template>
  <div class="container">
    <div class="hero" :style="getHeroImageString">
      <h2>
        {{ homePost.title }}
      </h2>
    </div>
    <div class="content" v-html="homePost.body">

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
  },
  computed: {
    homePost() {
      var firstPost = this.$store.state.homePosts[0]
      return firstPost
    },
    getHeroImageString() {
      // var heroImageUrl = this.homePost.Image - todo, setup heroimage in config
      var heroImageUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FT19Do0I.jpg&f=1&nofb=1"
      return `background-image: url('${heroImageUrl}')`
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
.container {

  &-long {
    height: 500px;
  }
}
</style>
