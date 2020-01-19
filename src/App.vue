<template>
  <div id="app">
    <Head/>
    <router-view></router-view>
  </div>
</template>

<script>
import Head from './components/head/Head'
export default {
  name: 'app',
  components: {
    Head
  }
}
</script>
