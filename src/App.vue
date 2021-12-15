<template>
  <div>
    <ul>
      <cart-item 
      v-for="storedproduct in storedproducts" 
      :key="storedproduct.id"
      :title="storedproduct.title"
      :description="storedproduct.description"
      :image="storedproduct.image"
      :price="storedproduct.price"
      :link="storedproduct.link"></cart-item>
    </ul>
  </div>
</template>

<script>

import CartItem from './components/CartItem.vue';

export default {
  components:{
    'cart-item': CartItem
  },

  data(){
    return{
      storedproducts:[
        {
          id: 'apple',
          title: 'IPhone 13 Pro Max',
          description: 'The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
          image: require('./assets/apple-iphone-13-pro-max.jpg'),
          price: '$1099.00',
          link: 'https://www.apple.com/iphone-13-pro/specs/',
        },

        {
          id: 'google',
          title: 'Google Pixel 6 Pro',
          description: 'Google Pixel 6 Pro Android smartphone. Announced Oct 2021. Features 6.71″ display, Google Tensor chipset, 5003 mAh battery, 512 GB storage, 12 GB RAM',
          image: require('./assets/google-pixel-6-pro.jpg'),
          price: '$898.98',
          link: 'https://store.google.com/us/product/pixel_6_pro?hl=en-US'
        }
      ]
    }
  }
}
</script>

