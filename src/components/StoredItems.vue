<template>
    <ul>
      <cart-item 
      v-for="storedproduct in cart" 
      :key="storedproduct.id"
      :title="storedproduct.title"
      :description="storedproduct.description"
      :image="storedproduct.image"
      :price="storedproduct.price"
      :link="storedproduct.link">
      </cart-item>
    </ul>
</template>

<script>
import CartItem from './CartItem.vue';
export default{
  
    inject:['cart'],

    components:{
        'cart-item': CartItem
    },

    
}
</script>

<style scoped>
ul {
  list-style: none;
  /* margin: 0; */
  padding: 0;
  margin: auto;
  max-width: 60rem;
}
</style>
