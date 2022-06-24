<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-toolbar-title class="myFont" @click="toHomePage">Toko Yoganicats</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field 
      id="search-txt" 
      label="Search" 
      class="pt-7"
      v-model="keyword"
      solo
     
      ></v-text-field>
      <v-btn v-on:click="search()" icon>
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon v-bind="attrs" v-on="on" @click="toCartPage">
        <v-badge color="white"  
        :content="$store.getters.getIsiCart"
        small>
          <v-icon color="white">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
      <div v-show="!this.$store.getters.loginTest">
        <v-btn id="btn-login"
        class="ma-auto mx-1 rounded-10" 
        @click="login"
        color="black"
        outlined>Masuk</v-btn>
        
        <v-btn id="btn-reg"
        class=" ma-auto mx-1 rounded-0"
        @click="register"
        color="black"
        outlined>Daftar</v-btn>
      </div>
      <div class="text-center mx-1"
      v-show="this.$store.getters.loginTest">
        <v-menu offset-y open-on-hover rounded="0">
          <template v-slot:activator="{on, attrs}">
            <v-btn icon v-bind="attrs" v-on="on" color="white">
              <v-icon>mdi-account</v-icon>
            </v-btn>
          </template>
          <v-card tile elevation="0"> 
            <v-card-text>Login as: </v-card-text>
            <v-card-text>
              <v-icon color="black">mdi-account</v-icon>
              {{this.$store.getters.loginInfo}}
              </v-card-text>
            <v-card-action>
              <v-btn 
              block
              id="logout-btn"
              class="rounded-0"
              @click="logout()">
              Logout</v-btn>
            </v-card-action>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>
    <v-main>
      <login-overlay :overlay_val="overlayLogin" @exitOverlayLogin="exit"/>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style>
.myFont{
  font-family: 'Ubuntu', cursive;
}
#search-txt{
  width: 20%;
  background-color: white;
}
#btn-login:hover{
  background-color: white !important;
  color: green;
}
#btn-reg:hover{
  background-color: white !important;
  color: green;
}
#logout-btn:hover{
  background-color: red;
  color:white !important;
}
</style>

<script>
import firebase from 'firebase';
import LoginOverlay from './components/LoginOverlay.vue';
export default {
  name: 'App',
  components:{
    LoginOverlay,
  },

  data(){
    return{
      hasil: '',
      show: true,
      overlayLogin: false,
      keyword:"",
      items:[
        {title:'click Me 1'},
        {title:'click Me 2'},
        {title:'click Me 3'},
        {title:'click Me 4'},
      ],
      // overlayRegister: false,
    }
  },
  created(){
    if(localStorage.getItem("email") && localStorage.getItem("password")){
      var emailLocal = localStorage.getItem("email")
      var passwordLocal = localStorage.getItem("password")
      firebase.auth().signInWithEmailAndPassword(emailLocal, passwordLocal)
            .then(() => {
                var isLogin = true
                var email = emailLocal
                var password = passwordLocal
                localStorage.setItem("email",email)
                localStorage.setItem("password",password)
                this.$store.commit("loginState", {isLogin, email, password})
      })
    }
  },
  methods: {
    login(){
      this.overlayLogin = !this.overlayLogin
    },
    search(){
      this.$store.commit("searchInput",this.keyword)
      if(this.$router.currentRoute.path != '/searchpage'){
        this.$router.push('/searchpage')
      }
    },
    toCartPage(){
      this.$router.push('/cartpage')
    },
    toHomePage(){
      this.$router.push('/')
    },
    logout(){
      firebase.auth().signOut()
      .then(()=>{
        alert("Log Out Berhasil, Goodbye "+this.$store.state.email)
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        var isLogin = !this.$store.state.isLogin
        var email = ""
        var password = ""
        this.$store.commit("loginState",{isLogin, email, password})
        this.$router.push('/')
      })
    },
    register(){
      this.$router.push('/registerpage')
    },
    exit(exitO){
      this.overlayLogin = exitO
    }
  }
};
</script>
