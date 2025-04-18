import { createStore } from 'vuex';
// The function takes the current status and returns the next status in the sequence
const getNextStatus = (status) => {
    const statuses = ['Order Received', 'Order Preparing', 'Ready to Serve']
    const index = statuses.indexOf(status)
    return index < statuses.length - 1 ? statuses[index + 1] : status
}
const store = createStore({
    state() {
        return {
            user: null,
            orders: [
                { id: 1, customer: 'John', items: 2, amount: 500, status: 'Preparing' },
                { id: 2, customer: 'Emma', items: 3, amount: 750, status: 'Ready to Serve' },
                { id: 3, customer: 'Alice', items: 1, amount: 250, status: 'Ready to Serve' },
                { id: 4, customer: 'Michael', items: 4, amount: 1000, status: 'Order Received' },
                { id: 5, customer: 'Sophia', items: 2, amount: 600, status: 'Preparing' },
                { id: 6, customer: 'David', items: 1, amount: 300, status: 'Preparing' },
                { id: 7, customer: 'Lily', items: 5, amount: 1200, status: 'Ready to Serve' },
                { id: 8, customer: 'James', items: 2, amount: 550, status: 'Order Received' },
                { id: 9, customer: 'Olivia', items: 3, amount: 850, status: 'Preparing' },
                { id: 10, customer: 'Daniel', items: 4, amount: 950, status: 'Ready to Serve' },
                { id: 11, customer: 'Ava', items: 1, amount: 200, status: 'Order Received' },
                { id: 12, customer: 'Lucas', items: 3, amount: 700, status: 'Preparing' },
                { id: 13, customer: 'Grace', items: 2, amount: 500, status: 'Ready to Serve' },
                { id: 14, customer: 'Henry', items: 4, amount: 980, status: 'Order Received' },
                { id: 15, customer: 'Chloe', items: 1, amount: 250, status: 'Preparing' },
                { id: 16, customer: 'John Doe', items: 2, amount: 500, status: 'Order Received' },
                { id: 17, customer: 'Jane Smith', items: 3, amount: 750, status: 'Order Preparing' },
                { id: 18, customer: 'Alice', items: 1, amount: 250, status: 'Ready to Serve' },
            ],
        }
    },
    mutations: {
        // Mutation to add a new order
        setUser(state, payload) {
            state.user = payload
            console.log('User set to:', payload)
        },
        // Mutation to update the status of an order
        updateOrderStatus(state, orderId) {
            const order = state.orders.find(o => o.id === orderId)
            if (order) {
                order.status = getNextStatus(order.status)
            }
        }
    },
    getters: {
        // getter called orderStatusCounts that returns an object with the counts of each status
        orderStatusCounts(state) {
          const counts = {
            'Order Received': 0,
            'Order Preparing': 0,
            'Ready to Serve': 0,
            'Total Orders': state.orders.length
          }
          state.orders.forEach(order => {
            if (counts[order.status] !== undefined) counts[order.status]++
          })
          return counts
        }
      }
})
export default store