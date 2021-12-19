<template>
  <div>
    <the-header title="Mini Cart"></the-header>
    <all-items></all-items>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import AllItems from './components/AllItems.vue';

export default {
  components:{
    'the-header': TheHeader,
    'all-items': AllItems
  },
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

