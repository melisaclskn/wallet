import axios from 'axios'
axios.defaults.baseURL='http://192.168.10.70:8000/'
axios.defaults.headers.common['Authorization']='Bearer'+localStorage.getItem('token');