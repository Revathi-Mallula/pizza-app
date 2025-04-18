<template>
  <v-row>
    <v-col v-for="(count, status) in orderCounts" :key="status" cols="12" sm="3">
      <v-card variant="flat" color="blue-lighten-5" dark>
        <v-card-title>{{ status }}</v-card-title>
        <v-card-text class="text-h4">{{ count }}</v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
// this is a computed property that will update when the store changes
const orderCounts = computed(() => store.getters.orderStatusCounts)
</script>