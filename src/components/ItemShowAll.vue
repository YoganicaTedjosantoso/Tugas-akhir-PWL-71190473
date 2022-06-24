<template>
    <v-container>
        <v-row>
            <v-col v-for="item in isiproducts" :key="item.id" class="justify-center" lg="4" sm="12">
                <v-card elevation="4" 
                tile
                class="mx-auto my-auto ">
                    <v-list>
                        <v-list-item>
                            <v-img :src="item.file_path"
                            class="my-auto mx-auto" ></v-img>
                        </v-list-item>
                        <v-list-item-content>
                            <v-list-item justify-center>
                                <v-card-title id="title" class="mx-auto my-auto pa-0 justify-center">
                                    {{item.nama}}</v-card-title>
                            </v-list-item>
                            <v-list-item>
                                <v-card-title id="title" class="mx-auto my-auto pa-0 justify-center">
                                    Rp. {{item.harga.toLocaleString("id-ID")}}</v-card-title>
                            </v-list-item>
                            <v-list-item>
                                <v-rating
                                background-color="indigo lighten-3"
                                color="indigo"
                                class="mx-16 px-8"
                                small
                                readonly
                                :value="item.rating"></v-rating>
                            </v-list-item>
                            </v-list-item-content>
                        <v-btn @click="addToCart(item,1)" 
                        id="btnCart" 
                        class="my-auto mx-16 px-16 justify-center"
                        tile
                        elevation="0">
                            Add to Cart <v-icon>mdi-cart-plus</v-icon>
                        </v-btn>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import { db } from '../db';
import { mapActions } from 'vuex';
export default {
    name: 'ItemShowAll',

    data() {
        return {
            isiproducts:[]
        };
    },

    mounted() {
        
    },
    created(){
        db.collection('produk')
        .get()
        .then((querySnapshot)=>{
            const documents = querySnapshot.docs.map((doc)=>({id:doc.id, ...doc.data()}))
            this.isiproducts=documents
        })
    },

    // computed(){

    // },

    methods: {
        ...mapActions(["addToCart"])
    },
};
</script>
<style>
 #btnCart:hover{
    background-color: greenyellow;
 }
 #title{
    font-size:medium;
 }
</style>