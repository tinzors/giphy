<template>
  <div>
    <div class="container col-md-offset-4 login">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" v-model="user.password">
                </div>
                <div class="form-group">
                    <p>Don't have an account? Sign up <router-link :to="{ name: 'Signup', }">here</router-link>.</p>
                </div>
                
                <button type="submit" class="btn btn-primary" v-on:click.prevent="login()">Login</button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
      return {
          user: {
            email: '',
            password: ''
        }
      }
  },
  created () {
  },
  methods: {
      login () {
          this.$store.dispatch('LOGIN', this.user).then(results => {
              this.$swal('Success', 'Welcome!', 'success').then(() => {
                this.$router.push('/')
              })
          }).catch(err => {
              this.$swal('Error', 'Sorry, but you need to implement proper error handling!', 'error')
          })
      }
  },
  computed: {
    ...mapGetters({
    })
  },
  components: {}
}
</script>

<style>
.login {
    margin-top: 100px;
}
</style>