<template>
  <v-container>
    <!-- toolbar -->
    <v-toolbar class="text-white" color="primary" dark>
      <v-toolbar-title text="Pizza app"></v-toolbar-title>
      <v-btn icon="mdi-export" @click="logout"></v-btn>
    </v-toolbar>
    <!--  status cards -->
    <h4 class="mb-3 mt-3 text-primary" color="primary">Order Status Overview</h4>
    <status-cards></status-cards>
    <!--  orders table -->
    <h4 class="mt-3 text-primary" color="primary">Orders Table</h4>
    <orders-table></orders-table>
  </v-container>
</template>
<script setup>
import OrdersTable from '../components/OrdersTable.vue'
import StatusCards from '../components/StatusCards.vue';
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useStore()
//function to logout the user and redirect to login page
const logout = () => {
  store.commit('setUser', { username: null })
  router.push('/login')

}
</script>