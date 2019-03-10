import axios from 'axios'
const instance = axios.create({
  baseURL: process.env.isServer ? 'http://127.0.0.1:3000/' : '/',
  headers: {
    // cookie: req.get('cookie')
  }
})

export default instance;
