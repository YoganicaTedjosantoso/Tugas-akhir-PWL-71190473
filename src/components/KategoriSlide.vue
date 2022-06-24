<template>
    <div>
        <v-container>
            <v-sheet>
                <v-row>
                    <v-col v-for="item in items_kategori" :key="item.id">
                        <v-card elevation="2" tile class="my-auto">
                            <v-img :src = "item.path_file" width="100" height="100" class="mx-auto my-auto"></v-img>
                            <v-card-text class="text-center">{{item.nama}}</v-card-text>
                            <v-card-action>
                                <v-btn width="100%" class="rounded-0">See</v-btn>
                            </v-card-action>
                        </v-card>
                    </v-col>
                </v-row>
            </v-sheet>
        </v-container>
    </div>
</template>

<script>
import {db} from '../db'
export default {
    name:"KategoriSlide",
    data (){
        return{
            items_kategori: []
        };
    },
    created(){
        db.collection('kategori_pilihan')
            .get()
            .then((querySnapshot) =>{
                const documents = querySnapshot.docs.map((doc) => doc.data())
                this.items_kategori = documents;      
        })
    }
}
</script>