import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.strandapp.com', // Replace with your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
