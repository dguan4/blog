<template>
  <footer class="footer">
    <div class="footer__left-side">
      <div>
        Built by David Guan
      </div>
    </div>

    <div class="footer__right-side">
      © Copyright {{currentYear}}
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $color-background;
  padding-top: 0.5rem;
  box-shadow: 0px -2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 1rem 1rem;
}
</style>
