<template>
  <div>
     <ul>
         <li v-for="(item,index) in arr" :key="index">{{item}}</li>
     </ul>
  </div>
</template>

<script>
import swiper from 'swiper/js/swiper'
import 'swiper/css/swiper.css'
export default {
    data(){
        return {
            arr:["成单奖励","成单奖励","成单奖励","成单奖励","成单奖励","成单奖励"]
        }
    }
}
</script>

<style lang="scss">

</style>