<template>
  <div>
    <div v-for="blog in blogPosts" :key="blog.id">
      <nuxt-link :to="getBlogSlug(blog.slug)">{{blog.title}}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  methods: {
    getBlogSlug(slug) {
      return `/blog/${slug}`;
    }
  }
};
</script>
