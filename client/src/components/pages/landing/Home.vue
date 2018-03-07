<template>
  <div class="container">
    <div class="col-md-offset-4">
      <SearchBar />
    </div>
    <div>
      <GiphyCollection :giphies='giphies'/>
    </div>
    <EmailFriend />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SearchBar from '@/components/shared/search/Search'
import GiphyCollection from '@/components/shared/giphy/GiphyCollection'
import EmailFriend from '@/components/shared/modals/EmailFriend'

export default {
  data () {
      return {

      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      this.isScrolling = true
      let d = document.documentElement
      let pageOffset = d.scrollTop + window.innerHeight
      let height = d.offsetHeight;
      if (pageOffset >= 0.9*height) {
        let opts = {
          searchTerm: this.searchTerm,
          infiniteScrolling: true,
          offset: this.offset
        }
        this.$store.dispatch('GET_GIPHIES', opts).catch(err => {
            this.$swal('Error', 'Sorry, but you need to implement proper error handling!', 'error')
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      giphies: 'giphies',
      searchTerm: 'searchTerm',
      offset: 'offset',
      isScrolling: 'isScrolling'
    })
  },
  components: {
    SearchBar,
    GiphyCollection,
    EmailFriend
  }
}
</script>

<style>
.center-search-bar {

}
</style>