import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.isServer ? 'http://127.0.0.1:3000/' : '/'
})

console.log('axios is server?', process.env.isServer)

export default instance;
