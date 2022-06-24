<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="my-2">
                    <v-list-item v-for="items in isiCart" :key="items.id">
                        <v-list-item-content>
                            <v-sheet>
                                <v-img :src="items.file_path"
                                width="250"
                                height="250"
                                class="justify-left">
                                </v-img>
                            </v-sheet>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-title>{{items.nama}}</v-list-title>
                            <v-list-subtitle>Rp. {{items.harga}}</v-list-subtitle>
                            <v-list-subtitle>{{items.qty}} x {{items.harga}}</v-list-subtitle>
                            <v-list-subtitle>
                                Sub Total: Rp. {{items.qty*items.harga}}
                            </v-list-subtitle>
                            <!-- <v-list-item-subtitle>
                                Checkout ($ {{ totalPrice.toLocaleString() }})
                            </v-list-item-subtitle> -->
                        </v-list-item-content>
                        <v-list-item-content >
                            <v-list-item-icon>
                                <v-btn
                                    elevation="0"
                                    tile 
                                    height="15"
                                    width="15"
                                    color="primary"
                                    outlined
                                    @click="reduceQty(items)">
                                    <v-icon small>mdi-minus</v-icon> 
                                </v-btn>
                                <v-list-subtitle 
                                    class="px-3">
                                    {{items.qty}}
                                </v-list-subtitle>
                                <v-btn 
                                    tile
                                    elevation="0"
                                    height="15"
                                    width="15"
                                    color="primary"
                                    outlined 
                                    @click="addQty(items)">
                                    <v-icon small>mdi-plus</v-icon> 
                                </v-btn>
                            </v-list-item-icon>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
        <v-btn tile elevation="0" width="100%" @click="toCheckoutPage()"> Checkout
            <v-icon>mdi-cart-arrow-right</v-icon>
        </v-btn>
    </v-container>
</template>
<style scoped>
    #qty-btn{
        background-color: blue;
    }
</style>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'IsiCartPage',

    data() {
        return {
            isiCart:this.$store.state.cart
        };
    },

    methods: {
      ...mapActions(["addQty", "reduceQty"]),
      toCheckoutPage(){
        this.$router.push('/checkoutpage')
      }
    },
    computed:{
   
    }
};
</script>