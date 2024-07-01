<script>
import AppHeader from './components/AppHeader.vue';


export default {
  components: {
   AppHeader,
   AppFooter,
  }
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss">
</style>