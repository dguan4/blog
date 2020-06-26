export const state = () => ({
  blogPosts: [],
  homePost: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setHomePosts(state, list) {
    state.homePosts = list
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
    let homeFiles = await require.context('~/assets/content/home/', false, /\.json$/)
    let homePosts = homeFiles.keys().map(key => {
      let res = homeFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setHomePosts', homePosts)

    let blogFiles = await require.context('~/assets/content/blog/', false, /\.json$/)
    let blogPosts = blogFiles.keys().map(key => {
      let res = blogFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  },
}