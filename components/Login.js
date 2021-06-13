const Login = {
  name: "login",
  props: {
    userName: {
      type: String,
    },
    password: {
      type: String
    }
  },
  setup(props) {
    const data = Vue.reactive({
      message: "",
      name: props.userName
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
    <div>
      {{data.name}}さん、こんにちは!
      <p class="bg-danger text-center">{{data.message}}</p>
    </div>
  `
}