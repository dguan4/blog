<template>
  <header class="header">
    <h1 class title="David Guan">
      <nuxt-link class="header-logo" to="/">
        <svg viewBox="130 90 160 220" id="dg">
          <g fill="none" stroke="#030312">
            <!--     <path d="M7.3 75L25.9 6.8s58.4-6.4 33.5 13-41.1 32.8-11.2 30.8h15.9v5.5s42.6 18.8 0 20.6" />
    <path d="M133.1 58.2s12.7-69.2 24.4-47.5c0 0 4.1 8.6 9.5.9 0 0 5-10 10.4.9 0 0 12.2 
            32.6 13.6 43 0 0 39.8 5.4 15.8 15.4-13.2 5.5-53.8 13.1-77.4 5.9.1 0-51.9-15.4 3.7-18.6z" />-->
            <path
              id="david"
              d="M 150 300 L 150 100 C 200 100 250 150 250 200 C 250 250 200 300 150 300"
              stroke-width="5"
            />
            <path
              id="guan"
              d="M 270 100 C 220 100 170 150 170 200 C 170 250 220 300 270 300 L 270 200 L 220 200  "
              stroke-width="10"
            />
          </g>
        </svg>
      </nuxt-link>
    </h1>
    <div class="header-links">
      <ul>
        <li>
          <nuxt-link class="header-link" to="blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link class="header-link" to="about">About Me</nuxt-link>
        </li>
        <li>
          <nuxt-link class="header-link" to="how">How I Made It</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 16px 0;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.1);
  background: $color-background;
  position: sticky;
  top: 0;
  // animation: background 1s linear 1s infinite;

  &-logo {
    padding-left: 1rem;
    margin: 0.5rem 0;
    &::after {
      content: none;
    }
  }

  &-links {
    ul {
      display: flex;
      list-style: none;
      padding-right: 1rem;

      li {
        padding-left: 1rem;
      }
    }
  }

  &-link {
    @include links($color-dark-blue);
    // color: $color-link;
    text-decoration: none;
  }

  // &-logo {
  //   opacity: 0;
  //   text-decoration: none;
  //   display: inline-block;
  //   animation: fadein 1s ease-in 1s 1 forwards;
  // }
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

#dg {
  height: 50px;
  // opacity: 0;
}

#david,
#guan {
  opacity: 0;
}
</style>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.1.1/gsap.min.js"
        }
        // {
        //   src:
        //     "https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/DrawSVGPlugin3.min.js"
        // }
      ],
      link: [
        {
          href:
            "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
          rel: "stylesheet"
        },
        {
          href: "https://fonts.googleapis.com/css?family=Rubik&display=swap",
          rel: "stylesheet"
        }
      ]
    };
  },
  mounted() {
    let tl = new gsap.timeline();
    tl.to("#david", {
      drawSVG: "0%"
    });
    tl.to("#david", { duration: 1, autoAlpha: 1, drawSVG: "100%", delay: 0.2 });
    tl.to("#david", {
      delay: -0.2
    });
    tl.to("#guan", {
      drawSVG: "0%"
    });
    tl.to("#guan", {
      duration: 1,
      autoAlpha: 1,
      drawSVG: "100%",
      delay: -0.3
    });
  }
};
</script>
