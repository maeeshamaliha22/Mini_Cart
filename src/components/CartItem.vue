<template>
    <li>
        <base-card>
            <header>
                <h3>{{ title }}</h3>
                <base-button mode="flat" @click.native="removeProduct(id)">Remove Item</base-button>
            </header>
            <p>{{ description }}</p>
            <img :src="image">
            <p>{{ price }}</p>
            <nav>
                <a :href="link">View Details</a>
            </nav>
        </base-card>
    </li>
</template>

<script>

export default{   
    inject: ['removeProduct'],
    // props: ['title', 'description', 'image', 'price', 'link']
    props:{
        id:{
            type:String,
            required: true
        },

        title:{
            type:String,
            required: true
        },

        description:{
            type: String,
            required: true
        },

        image:{
            type: String, 
            required: true
        },

        price:{
            type: String,
            required: true
        },

        link:{
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}

img{
  width: 21%;
  display: block;
  margin: inherit;
}
</style>
