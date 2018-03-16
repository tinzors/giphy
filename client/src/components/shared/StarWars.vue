<template>
  <div class="container">
    <p v-for="ship in ships">{{ ship.name }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'


export default {
  data () {
      return {

      }
  },
  created () {
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      
    })
  },
  components: {

  },
  props: ['ships']
}
</script>

<style>
