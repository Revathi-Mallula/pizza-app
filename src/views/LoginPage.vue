<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="6" md="4">
        <!-- Login card-->
        <v-card class="mx-auto" color="primary" variant="outlined" max-width="400">
          <img src="../assets/images/pizza2.png" alt="Logo" class="mx-auto d-block mt-3 mb-3" width="100" height="100"/>
          <!-- <v-card-title class="text-h5" justify="center">Login</v-card-title> -->

           <!--form with email and password-->
          <form @submit.prevent="submit">
            <v-card-text>
              <v-text-field :error-messages="email.errorMessage.value" v-model="email.value.value" label="Email"
                outlined></v-text-field>
              <v-text-field :error-messages="password.errorMessage.value" v-model="password.value.value" label="Password" type="password" outlined></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block type="submit">Login</v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="snackbar"
      :timeout="2000"
      color="success">
      Successfully logged in!
    </v-snackbar>


  </v-container>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useField, useForm } from 'vee-validate'
const store = useStore()
const route = useRouter()
const snackbar = ref(false)
//form validation
const { handleSubmit } = useForm({
  validationSchema: {

    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

      return 'Must be a valid e-mail.'
    },
    password(value) {
      if (value?.length >= 6) return true

      return 'Name needs to be at least 6 characters.'
    },

  },
})

const email = useField('email')
const password = useField('password')

const submit = handleSubmit(values => {
  snackbar.value = true
  setTimeout(() => {
    login(values)
  }, 500)
    
  }
)
// storing user data and redirection after login
const login = (values) => {
  store.commit('setUser', { username: values.email })
  route.push('/dashboard')
}
</script>