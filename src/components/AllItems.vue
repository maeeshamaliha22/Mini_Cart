<template>
    <base-card>
        <base-button v-on:click.native="setSelectedTab('add-items')">Add Products</base-button>
        <base-button v-on:click.native="setSelectedTab('stored-items')">Products In Cart</base-button>
        <component :is="storedTab"></component>
    </base-card>
    
</template>



<script>
import StoredItems from './StoredItems.vue'
import AddItems from './AddItems.vue'

export default {

    components:{
        'stored-items': StoredItems,
        'add-items': AddItems
    },

    data(){
        return{
            storedTab : 'add-items',
            storedproducts:[
                {
                    id: 'apple',
                    title: 'IPhone 13 Pro Max',
                    description: 'The iPhone 13 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle.',
                    image: require('@/assets/apple.jpg'),
                    price: '$1099.00',
                    link: 'https://www.apple.com/iphone-13-pro/specs/',
                    },

                    {
                    id: 'google',
                    title: 'Google Pixel 6 Pro',
                    description: 'Google Pixel 6 Pro Android smartphone. Announced Oct 2021. Features 6.71″ display, Google Tensor chipset, 5003 mAh battery, 512 GB storage, 12 GB RAM',
                    image: require('@/assets/google-pixel-6-pro.jpg'),
                    price: '$898.98',
                    link: 'https://store.google.com/us/product/pixel_6_pro?hl=en-US'
                }
            ]
        };
    },

    methods: {
        setSelectedTab(tab){
            this.storedTab = tab
        }
    },

    provide(){
        return{
            cart: this.storedproducts
        }
    },

    
}
</script>