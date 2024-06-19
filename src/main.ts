import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import {useRouter} from 'vue-router';
;
import axios from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css'; // Dodajte CSS temu

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')

const currentRoute = router.currentRoute.value;

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
})

axios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const { status } = error.response
    if(status === 401) {
        const toast = useToast();
        toast.error('Sesija je istekla');
        router.push('/login')
    }
    return Promise.reject(error)
})
  
  
  
 
  