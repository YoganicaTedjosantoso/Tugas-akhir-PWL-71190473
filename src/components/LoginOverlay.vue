<template>
    <html>
        <div>
            <v-overlay :value="overlay_val">
                <v-sheet
                    width="1100"
                    class="my-auto pb-10"
                    color="blue">
                    <v-card-title>Login
                        <v-spacer></v-spacer>
                        <v-icon @click="exitLogin">mdi-close</v-icon>
                    </v-card-title>
                    
                    <div class="mx-auto px-6">
                        <v-text-field label="E-mail" v-model="email" placeholder="Masukkan Email">
                        </v-text-field>
                        <v-text-field label="Password" type="password" v-model="password" placeholder="Masukkan Password"></v-text-field>
                        <v-btn color="black" 
                        @click="login" 
                        class="rounded-0 mb-2" 
                        width="100%"
                        outlined
                        :loading="loading">Login</v-btn>
                        <v-btn @click="toregister"  width="100%" >Not have account? Register</v-btn>
                    </div>
                </v-sheet>
            </v-overlay>
        </div>
    </html>
</template>
<style>

</style>
<script>
import firebase from 'firebase';
export default {
    name: "LoginOverlay",
    props: {
        overlay_val:Boolean
    },

    data:() =>({
        email:'',
        password:'',
    }),
    methods:{
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                var isLogin = true
                var email = this.email
                var password = this.password
                localStorage.setItem("email",email)
                localStorage.setItem("password",password)
                // this.$store.state.isLogin = true
                // this.$store.state.email = this.email
                this.$store.commit("loginState", {isLogin, email, password})
                alert("Welcome "+ email)
                this.email = ""
                this.password = ""
                this.$router.push('/')
                this.exitLogin()
            })
        },
        toregister(){
            this.$router.push('/registerpage')
            this.exitLogin()
        },
        exitLogin(){
            this.$emit('exitOverlayLogin', !this.overlay_val);
        }
    },
    
}
</script>