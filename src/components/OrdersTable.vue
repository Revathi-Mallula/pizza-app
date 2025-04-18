<template>
    <!-- data table-->
    <v-data-table :headers="headers" :items="orders" :items-per-page="5" :items-per-page-options="[5, 10, 20]"
        v-model:page="page" :page-count="pageCount">
        <!-- table header-->
        <template v-slot:item.actions="{ item }">
            <v-btn color="primary" class="text-none" rounded @click="updateStatus(item)">Next Status</v-btn>
        </template>

        <!-- pagination-->
        <template v-slot:bottom>
            <v-row class="d-flex justify-center align-center mt-2">
                <v-btn color="primary" size="x-small" icon="mdi-chevron-left" :disabled="page === 1" @click="page--">
                </v-btn>
                <span class="mx-2">Page {{ page }} of {{ pageCount }}</span>
                <v-btn size="x-small" color="primary" icon="mdi-chevron-right" :disabled="page === pageCount"
                    @click="page++">
                </v-btn>
            </v-row>
        </template>

        
    </v-data-table>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
const store = useStore()
//
const page = ref(1)
const pageCount = computed(() => Math.ceil(orders.value.length / 5))
// get the orders from the store
const orders = computed(() => store.state.orders)

// define the headers for the table

const headers = [
    { title: "Customer's Name", key: 'customer' },
    { title: 'Items', key: 'items' },
    { title: 'Amount', key: 'amount' },
    { title: 'Status', key: 'status' },
    { title: 'Actions', key: 'actions', sortable: false },
]
// function to change the status of the order to the next one in the list
const updateStatus = (order) => {
    store.commit('updateOrderStatus', order.id)
}
</script>