<template>
  <div>
    <div class="row searchBar">
        <div class="col-lg-6">
            <div class="input-group">
            <input type="text" class="form-control" placeholder="Search for a Giphy!" v-model="searchTerm" v-on:keyup.enter="keyMonitor">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" v-on:click.prevent="search()">Search</button>
            </span>
            </div>
        </div>
    </div>
        
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
      return {
          searchTerm: ''
      }
  },
  created () {
  },
  methods: {
      search () {
        let searchTerm = this.searchTerm.replace(/ /g, "+")
        let offset = this.offset
        let opts = {
            searchTerm,
            infiniteScrolling: false,
            offset
        }
        this.$store.commit('SET_SEARCH_TERM', searchTerm)
        this.$store.commit('SET_IS_SCROLLING', false)
        this.$store.dispatch('GET_GIPHIES', opts).catch(err => {
            this.$swal('Error', 'Sorry, but you need to implement proper error handling!', 'error')
        })
      },
      keyMonitor (e) {
          if (e.key == "Enter") {
              this.search()
          }
      }
  },
  computed: {
    ...mapGetters({
        offset: 'offset'
    })
  },
  components: {}
}
</script>

<style>
.searchBar {
    margin: 50px 0px 50px 0px;
}
</style>