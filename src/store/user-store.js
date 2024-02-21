import { defineStore } from 'pinia'
import { ref, reactive, watch, onMounted, computed } from 'vue'

const useUserStore = defineStore('user', () => {

    onMounted(() => {
        console.log('Mounted')
    })
    
})