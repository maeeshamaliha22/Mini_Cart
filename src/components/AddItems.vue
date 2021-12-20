<template>
    <div>
        <base-dialog v-if="inputIsInvalid" title="Invalid Output">
            <template #default>
                <p>Unfortunately, at least one input value is invalid.</p>
                <p>Please check all inputs and make sure you enter a least a few characters into each input field.</p>
            </template>
            <template #actions>
                <base-button @click.native="confirmError">Okay</base-button>
            </template>
        </base-dialog>
        <base-card>
            <form class="form-control" @submit.prevent="submitForm">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput"/>
            
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descInput"></textarea>

                <label for="image">Image</label>
                <input id="image" name="image" type="text"/>
                <button>Upload </button>
            
                <label for="price">Price</label>
                <input id="price" name="price" type="text" ref="priceInput"/>
            
                <label for="link">Link</label>
                <input id="link" name="link" type="url" ref="linkInput"/>
            
                <base-button type="submit" mode="submit">Add Product</base-button>   
            </form>
        </base-card>
    </div>
</template>

<script>
import BaseDialog from './BaseDialog.vue';
export default {
  components: { BaseDialog }, 
    inject: ['addProduct'],

    data(){
        return{
            inputIsInvalid :  false
        }  
    },

    methods:{
        submitForm(){
            const enteredTitle = this.$refs.titleInput.value;
            const enteredDesc = this.$refs.descInput.value;
            const enteredPrice = this.$refs.priceInput.value;
            const enteredLink = this.$refs.linkInput.value;

            if(enteredTitle.trim() === '' || 
            enteredDesc.trim() === '' ||
            enteredPrice.trim() === '' ||
            enteredLink.trim() === ''){
                this.inputIsInvalid = true;
                return;
            }

            this.addProduct(enteredTitle, enteredDesc, enteredPrice, enteredLink)
             
        },

        confirmError(){
            this.inputIsInvalid = false
        }
    }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin:  0.8rem 0;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>