<template>
    <div>
        <base-card>
            <base-button @click.native="setSelectedTab('add-items')" :mode="addProductButtonMode">Add Products</base-button>
            <base-button @click.native="setSelectedTab('stored-items')" :mode="storedProductButtonMode">Products In Cart</base-button>
        </base-card>
        <keep-alive>
            <component :is="storedTab"></component>
        </keep-alive>
    </div>
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

    computed:{
        addProductButtonMode(){
            return this.storedTab === 'add-items' ? 'flat' : null
        },

        storedProductButtonMode(){
            return this.storedTab === 'stored-items' ? 'flat' : null
        }
    },

    methods: {
        setSelectedTab(tab){
            this.storedTab = tab
        },

        addProduct(title, desc, price, url){
            const newProduct = {
                id: new Date().toISOString(),
                title: title,
                description: desc,
                price: price,
                link: url
            };
            this.storedproducts.push(newProduct);
            this.storedTab = 'stored-items';
        },

        removeProduct(prodId){
            const prodIndex = this.storedproducts.findIndex(prod => prod.id === prodId);
            this.storedproducts.splice(prodIndex, 1);
        }
    },

    provide(){
        return{
            cart: this.storedproducts,
            addProduct: this.addProduct,
            removeProduct: this.removeProduct
        }
    },

    
}
</script>