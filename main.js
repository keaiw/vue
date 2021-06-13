const app = Vue.createApp({
  setup() {
    const data = Vue.reactive({
      time: 0
    })
    return {data}
  }
})
app.use(store)
app.use(router)
app.mount("#app")