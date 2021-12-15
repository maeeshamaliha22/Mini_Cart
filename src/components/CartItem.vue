<template>
    <li>
        <div>
            <header>
                <h3>{{ title }}</h3>
                <button>Remove Item</button>
            </header>
        </div>
        <p>{{ description }}</p>
        <img :src="image">
        <p>{{ price }}</p>
        <nav>
            <a :href="link">View Details</a>
        </nav>
    </li>
</template>

<script>
export default{
    // props: ['title', 'description', 'image', 'price', 'link']
    props:{
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
