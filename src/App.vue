<template>
  <div>
    <the-header title="Mini Cart"></the-header>
    <stored-cart-items :cart="storedproducts"></stored-cart-items>
  </div>
</template>

<script>
import StoredCartItems from './components/StoredCartItems.vue';
import TheHeader from './components/TheHeader.vue';

export default {
  components:{
    'stored-cart-items': StoredCartItems,
    'the-header': TheHeader
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

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>

