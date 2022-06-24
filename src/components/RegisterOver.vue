<template>
    <html>
        <div>
            <v-overlay :absolute="absolute" :value="register_val">
                <v-sheet
                    width="500"
                    class="my-auto pb-6"
                    color="dark">
                    <v-card-title>Login
                        <v-spacer></v-spacer>
                        <v-icon @click="exitRegister">mdi-close</v-icon>
                    </v-card-title>
                    <div class="mx-auto px-9">
                        <v-text-field label="Username" v-model="username"></v-text-field>
                        <v-text-field label="Email" v-model="email"></v-text-field>
                        <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                        <v-btn color="green" 
                        @click="register" 
                        class="rounded-0 mb-2" 
                        width="100%"
                        outlined>Register</v-btn>
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
    name: "RegisterOverlay",
    props: {
        register_val:Boolean
    },

    data:() =>({
        absolute: true,
        isLogin:false,
        username:'',
        email:'',
        password:''
    }),
    methods:{
        register(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
            })
            .catch(err =>{
                err.alert("Register Error")
            })
        },
        exitRegister(){
            this.$emit('exitOverlayRegister', !this.register_val);
        }
        
    }
}
</script>