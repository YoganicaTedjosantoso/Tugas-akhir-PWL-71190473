<template>
    <v-container >
        <v-card justify-center class="my-4">
            <v-card-title class="pb-0 justify-center">Informasi Pengiriman</v-card-title>
            <div id="idInput" class="mx-auto pt-6">
                <v-text-field v-model="nama_penerima"
                placeholder="Nama Penerima"
                solo></v-text-field>
                <v-text-field v-model="alamat_penerima"
                placeholder="Alamat Penerima"
                solo></v-text-field>
            </div>
        </v-card>
        <v-divider></v-divider>
        <v-row class="my-4">
            <v-col>
                <v-card>
                    <v-list-item v-for="item in items" :key="item.id">
                        <v-list-item-content>
                            <v-sheet>
                                <v-img :src="item.file_path"
                                    width="100"
                                    height="100"
                                    class="justify-left">
                                </v-img>
                            </v-sheet>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-title>{{item.nama}}</v-list-title>
                                <v-list-subtitle>Rp. {{item.harga}}</v-list-subtitle>
                                <v-list-subtitle>{{item.qty}} x {{item.harga}}</v-list-subtitle>
                                <v-list-subtitle>Jumlah Pembelian {{item.qty}} pcs</v-list-subtitle>
                        </v-list-item-content>
                        <v-list-item-content>
                            <v-list-subtitle>
                                Sub Total: Rp. {{item.qty*item.harga}}
                            </v-list-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-card class="my-4">
            <v-card-title class="my-auto justify-end">Checkout: Rp. {{$store.getters.totalPrice.toLocaleString("id-ID")}}</v-card-title>
            <v-btn tile
             @click="bayar(items)"
            class="my-auto"> Order</v-btn>
        </v-card>
    </v-container>
</template>
<script>
import firebase from 'firebase';
import { db } from '@/db';
import { mapGetters } from 'vuex';
export default {
    name: 'CheckoutPage',

    data() {
        return {
            email: localStorage.getItem("email"),
            items: this.$store.state.cart,
            nama_penerima:"",
            alamat_penerima:"",
            totalHarga1:this.$store.getters.totalPrice
        };
    },

    mounted() {
        
    },

    methods: {
        bayar(items){
            var docdata = {
                nama:this.nama_penerima,
                alamat:this.alamat_penerima,
                history_tanggal: firebase.firestore.Timestamp.now(),
                keranjang: items,
                total:this.totalHarga1
            }
            db.collection("cart").doc(this.email).set(docdata).then(() =>{
                alert("Order Berhasil, Terima Kasih")
            })
        },
        
    },
    computed:{
        ...mapGetters(["cart"]),

        // totalPrice() {
        //     return this.cart.reduce((a, b) =>{a + b.qty * b.harga, 0});
        // }

    }
};
</script>
<style>
#idInput{
    width: 50%;
}
</style>