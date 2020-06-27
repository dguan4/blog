<template>
  <div>
    <div class="container">
      <div class="hero" :style="getHeroImageString()">
        <h2>
        {{ blogLanding.title }}
        </h2>
      </div>
      <div class="blogs">
        <div v-for="blog in blogPosts" :key="blog.id" class="blogs__tile" v-on:click="goToBlog(blog.slug)">
          <!-- <div class="blogs__tile-title-container"> -->
            <nuxt-link :to="getBlogSlug(blog.slug)" class="blogs__tile-title">{{blog.title}}</nuxt-link>
          <!-- </div> -->

          <div class="blogs__tile-description" v-if="blog.description">
            {{blog.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      console.log(this.$store.state.blogPosts)
      return this.$store.state.blogPosts;
    },
    blogLanding() {
      return this.$store.state.blogLandingPost
    }
  },
  methods: {
    getBlogSlug(slug) {
      return `/blog/${slug}`;
    },
    getHeroImageString() {
      // var heroImageUrl = this.homePost.Image - todo, setup heroimage in config
      var heroImageUrl = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FT19Do0I.jpg&f=1&nofb=1"
      return `background-image: url('${heroImageUrl}')`
    },
    goToBlog(slug) {
      this.$router.push(this.getBlogSlug(slug))
    }
  }
};
</script>

<style lang="scss">
.blogs {
  margin: -2rem 2rem 0;
  width: 75%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;

  &__tile {
    border: 1px solid black;
    border-radius: 10px;
    background: $color-hero-background;
    padding: 0rem 0rem 4rem 0rem;
    transition: all .3s ease-in-out;
    flex: 0 0 25%;
    margin-right: 2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    text-align: left;

    &-title {
      display: inline-block;
      padding-left: 1rem;
      padding-top: 1rem;
      color: white;
      &-container {
        background: $color-scheme-grey;
      }

      &:hover {
        color: #c25e1c;
      }

      &::after {
        content: none;
      }
    }

    &-description {
      margin-top: 1rem;
      padding-left: 1rem;
    }

    &:hover {
      box-shadow:  2px 2px 3px rgba(0, 0, 0, 0.5);
      transform: translate3d(-1%, -1%, 0);
    }
  }

}
</style>