<template>
  <div class="container">
    <h1>Hello World</h1>
    <Ships :ships="ships"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import request from '../../../utils/request'
import Ships from '../../shared/StarWars'

export default {
  data () {
      return {

      }
  },
  created () {

    this.sayHello()

    this.$store.dispatch('GET_SHIPS', {}).then(() => {
      console.log('..got ships..')
    }).catch(err => {
      //handle error
    })
  },
  methods: {
    sayHello () {
      console.log('--hello--')
    }
  },
  computed: {
    ...mapGetters({
      ships: 'ships'
    })
  },
  components: {
    Ships
  },
  props: []
}
</script>

<style>

</style>