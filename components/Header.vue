<template>
  <header class="header">
    <h1>
      <nuxt-link class="header-logo" to="/">David Guan</nuxt-link>
    </h1>
  </header>
</template>

<style lang="scss">
.header {
  padding: 16px 0;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.1);
  background: white;

  &-logo {
    opacity: 0;
    text-decoration: none;
    display: inline-block;
    animation: fadein 1s ease-in 1s 1 forwards;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
    transform: translate(0%, 0%);
  }
  to {
    opacity: 1;
    transform: translate(10%, 0%);
  }
}
</style>