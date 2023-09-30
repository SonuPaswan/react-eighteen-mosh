import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'af2b75f72f694723b56c05ea58846de4',
  },
})
