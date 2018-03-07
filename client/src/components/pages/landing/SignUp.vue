<template>
  <div>
    <div class="container col-md-offset-4 signup">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label for="">First Name</label>
                    <input type="text" class="form-control" placeholder="Enter first name" v-model="user.firstName">
                </div>
                <div class="form-group">
                    <label for="">Last Name</label>
                    <input type="text" class="form-control" placeholder="Enter last name" v-model="user.lastName">
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" placeholder="Enter email" v-model="user.email">
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" class="form-control" placeholder="Enter password" v-model="user.password">
                </div>
                <p>Already have an account? Login <router-link :to="{ name: 'Login', }">here</router-link>.</p>
                <button type="submit" class="btn btn-primary" v-on:click.prevent="register()">Submit</button>
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
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
      }
  },
  created () {
  },
  methods: {
      register () {
          this.$store.dispatch('SIGN_UP', this.user).then(results => {
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
.signup {
    margin-top: 100px;
}
</style>