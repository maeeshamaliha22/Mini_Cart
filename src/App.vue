<template>
  <div>
    <ul>
      <li></li>
    </ul>
  </div>
</template>

<script>

export default {
  data(){
    return{
      storedproducts:[
        {
          id: 'apple',
          title: 'IPhone 13 Pro Max',
          description: 'The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
          image: 'https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg',
          price: '$1099.00',
          link: 'https://www.apple.com/iphone-13-pro/specs/',
        },

        {
          id: 'google',
          title: 'Google Pixel 6 Pro',
          description: 'Google Pixel 6 Pro Android smartphone. Announced Oct 2021. Features 6.71″ display, Google Tensor chipset, 5003 mAh battery, 512 GB storage, 12 GB RAM',
          image: 'https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg',
          price: '$898.98',
          link: 'https://store.google.com/us/product/pixel_6_pro?hl=en-US'
        }
      ]
    }
  }
}
</script>

