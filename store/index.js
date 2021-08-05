export const state = () => ({
  dark: false,
})

export const mutations = {
  change(state, dark) {
    state.dark = dark
  },
}
