<template>
  <div>
    <div v-for='giphy in giphies'>
      <div class="col-md-4">
        <Giphy :giphy='giphy' /> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Giphy from './Giphy'

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
      Giphy
  },
  props: ['giphies']
}
</script>

<style>

</style>