const Login = {
  name: "login",
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
      message: ""
    })
    Vue.computed(() => {
      if(props.password == ""){
        data.message = "Welcome to the This Page"
      }else {
        data.message = "Sorry! get out!"
      }
    })
    return {
      data
    }
  },
  template: `
    <div>{{userName}}さん、こんにちは!</div>
    <p class="bg-danger text-center">{{data.message}}</p>
  `
}