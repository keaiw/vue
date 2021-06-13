const Login = {
  props: {
    userName: {
      type: String,
      required: true
    },
    password: {
      type: String
    }
  },
  setup(props) {
    const data = Vue.reactive({
      id: "1"
    })
    return {
      data
    }
  },
  template: `
    <div>{{proos.userName}}さん、こんにちは!</div>
  `
}