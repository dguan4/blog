export const state = () => ({
  blogPosts: [],
  homePagePost: {},
  blogLandingPost: {}
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setHomePagePost(state, item) {
    state.homePagePost = item
  },
  setBlogLandingPost(state, item) {
    state.blogLandingPost = item
  }
}

export const actions = {
  // async nuxtServerInit({ commit }) {
  //   let files = await require.context('~/assets/content/blog/', false, /\.json$/)
  //   let blogPosts = files.keys().map(key => {
  //     let res = files(key)
  //     res.slug = key.slice(2, -5)
  //     return res
  //   })
  //   await commit('setBlogPosts', blogPosts)
  // },
  async nuxtServerInit({ commit }) {
    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)

    let homePagePost = await require("~/assets/content/home.json")
    await commit('setHomePagePost', homePagePost)

    let blogLandingPost = await require("~/assets/content/blog.json")
    await commit('setBlogLandingPost', blogLandingPost)
  },
}