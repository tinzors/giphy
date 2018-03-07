<template>
  <div class="show-giphy-actions" v-on:mouseover="handleMouseOver" v-on:mouseleave="handleMouseLeave">
    <img :src='giphy' height='400' width='400'>
    <button type="button" class="btn btn-info btn-lg update" data-toggle="modal" data-target="#myModal" v-on:click="setGiphyUrl"><span class="glyphicon glyphicon-envelope"></span></button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
      return {
        isMouseOver: false
      }
  },
  created () {
  },
  methods: {
    handleMouseOver () {
      this.isMouseOver = true
    },
    handleMouseLeave () {
      this.isMouseOver = false
    },
    setGiphyUrl () {
      this.$store.commit('SET_GIPHY_URL_TO_SEND', this.giphy)
    }
  },
  computed: {
    ...mapGetters({
      
    })
  },
  components: {

  },
  props: ['giphy']
}
</script>

<style>
  div.show-giphy-actions:hover img{
      opacity:0.25;
  }
  div.show-giphy-actions:hover button {
      display: block;
  }
  div.show-giphy-actions button {
      position:absolute;
      display:none;
  }
  div.show-giphy-actions button.update {
    top: 50%;
    left: 50%;
  }
</style>