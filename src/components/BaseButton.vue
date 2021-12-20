<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default{
    props:['mode']
}
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  margin: 1rem 5px;
  font-family: inherit;
  background-color: white;
  border: 1px solid #3a0061;
  color: #3a0061;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
  color: white;
}

.submit{
  padding: 0.75rem 1.5rem;
  margin: 1rem 0;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>