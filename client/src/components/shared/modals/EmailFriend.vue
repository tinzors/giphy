<template>
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="myModalLabel">Share this Giphy with your friend!</h4>
          </div>
          <div class="modal-body">
            <div class="container col-md-offset-2">
                <div class="col-md-4">
                    <form>
                        <div class="form-group">
                            <label for="">Email</label>
                            <input type="email" class="form-control" placeholder="Enter your friend's email" v-model="emailOpts.email">
                        </div>
                        <div class="form-group">
                            <label for="">Password</label>
                            <textarea type="text" rows="10" class="form-control" placeholder="Enter a short message for your friend" v-model="emailOpts.message"/>
                        </div>
                    </form>
                </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="sendEmail()">Send</button>
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
        emailOpts: {
          email: '',
          message: ''
        }
      }
  },
  created () {
  },
  methods: {
    sendEmail () {
      this.emailOpts.giphyUrlToSend = this.giphyUrlToSend
      this.$store.dispatch('EMAIL_GIPHY', this.emailOpts).then(() => {
        this.$swal('Success', 'Email sent!', 'success').then(() => {
          $('#myModal').modal('hide')
        })
      }).catch(err => {
        this.$swal('Error', 'Something went wrong, improve your error handling!', 'error')
      })
    }
  },
  computed: {
    ...mapGetters({
      giphyUrlToSend: 'giphyUrlToSend'
    })
  },
  components: {}
}
</script>

<style>

</style>