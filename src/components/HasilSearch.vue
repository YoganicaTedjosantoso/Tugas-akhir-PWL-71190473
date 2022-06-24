<template>
    <v-container>
        
        <v-divider class="mb-4"></v-divider>
        <v-row>
            <v-col class="justify-center" lg="3" sm="12" v-for="item in hasilCari" :key="item.id">
                <v-card elevation="2" tile class="mx-auto my-auto pt-4" outlined>
                    <v-list>
                        <v-list-item>
                            <v-img :src="item.file_path" 
                            class="my-auto mx-auto"></v-img>
                        </v-list-item>
                        <v-list-item-content>
                            <v-list-item>
                                 <v-card-title id="card-title"
                                 class="mx-auto my-auto pa-0 justify-center">
                                 {{item.nama}}</v-card-title>
                            </v-list-item>
                            <v-list-item>
                                <v-card-subtitle
                                class="mx-auto my-auto pa-0 justify-center">
                                Rp. {{item.harga.toLocaleString("id-ID")}}</v-card-subtitle>
                            </v-list-item>
                            
                        </v-list-item-content>
                    </v-list>
                    <v-btn width="100%" class="ma-auto rounded-0" @click="addToCart(item,1)">
                        add to cart<v-icon>mdi-cart-plus</v-icon>
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
#card-title{
    font-size:small;
}
</style>

<script>
import { db } from '../db'
import { mapActions } from 'vuex'
export default {
    nama:"HasilSearch",
    data(){
        return{
            prod_search:[],
            keyword_search:this.$store.state.search,
            products:[]

        }
    },
    created(){
       
        db.collection('sembako')
        .get()
        .then((querySnapshot)=>{
            const documents1 = querySnapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
            this.products=documents1
            this.prod_search=documents1
        })
       
    },
    computed:{
        hasilCari: function(){
            return this.prod_search.filter((item) =>{
                if((item.nama).toLowerCase().match(this.keyword_search.toLowerCase())){
                    return (item.nama).toLowerCase().match(this.keyword_search.toLowerCase())
                }
                if((item.kategori).toLowerCase().match(this.keyword_search.toLowerCase())){
                    return (item.kategori).toLowerCase().match(this.keyword_search.toLowerCase())
                }
            })
        }

    },
    methods:{
        ...mapActions(["addToCart"])
    }

}
</script>