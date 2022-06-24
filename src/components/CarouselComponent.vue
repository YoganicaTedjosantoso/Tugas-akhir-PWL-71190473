<template>
    <div>
        <v-carousel hide-delimiters width="100%" height="250">
            <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.path_file"></v-carousel-item>
        </v-carousel>
        <v-card-title class="my-auto mx-auto justify-center">
            TOKO SEMBAKO
        </v-card-title>
    </div>
</template>
<script>
import { db } from '@/db'
export default {
    name:"CarouselComponent",
    data(){
        return{
            // items: [
            //     {
            //         src: "../assets/1.png",
            //     },
            //     {
            //         src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            //     },
            //     {
            //         src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            //     },
            //     {
            //         src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            //     }
            // ],
            items:[]
        }
    },
    created(){
        db.collection("carousel")
        .get()
        .then((querySnapshot) => {
            const documents = querySnapshot.docs.map((doc) => doc.data())
            this.items = documents
        })
    }
    
}
</script>