<template>
    <v-container justify-center class="mt-16 pt-16">
        <v-card tile width="500" class="mx-auto" >
            <v-card-title class="justify-center"
            color="primary">Register</v-card-title>
            <div class="mx-auto px-6">
                <div>
                   
                    <v-text-field 
                    label="Email" 
                    v-model="email" 
                    solo
                    id="inpRegis"></v-text-field>
                    <v-text-field 
                    label="Password" 
                    v-model="password" 
                    type="password" 
                    solo
                    id="inpRegis"></v-text-field>
                </div>
                <v-card-action>
                    <v-btn @click="register" 
                    color="blue"
                    class="rounded-0 mb-2"
                    width="100%"
                    outlined>Register</v-btn>
                </v-card-action>
            </div>
        </v-card>
    </v-container>
</template>
<script>
import firebase from 'firebase'
export default {
    name: "RegisterPage",
    props:{
        register_val:Boolean
    },
    data:()=>({
    
      email:'',
      password:''  
    }),
    methods:{
        register(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                alert("Register Bershasil "+this.email+" silahkan login")
              
                this.email = ""
                this.password = ""
                this.$router.push('/')
            })
            .catch(err =>{
                err.alert("Register Error")
            })
        },
    }
}
</script>
<style>
    #inpRegis{
        background-color: white;
    }
</style>