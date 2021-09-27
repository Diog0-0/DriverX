import axios from 'axios';

const graph = axios.create({
  baseURL: '"https://graph.facebook.com/v12.0',
});

export default graph;
