<template>
<div>    
    <carousel-component/>
        <!-- <kategori-slide/> -->
    <item-show-all/>
</div>

</template>
<script>
import CarouselComponent from './CarouselComponent.vue'
// import KategoriSlide from './KategoriSlide.vue'
import ItemShowAll from './ItemShowAll.vue'
export default {
  components: {
    //  KategoriSlide, 
     CarouselComponent, 
     ItemShowAll
     },
    name: 'DashboardHome',
    data(){
        return{
        }
    },
    methods:{

    }
}
</script>