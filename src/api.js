import axios from 'axios';

const api = axios.create({
	// baseURL: 'https://odin-spear-api.vercel.app/'
	baseURL: 'http://localhost:3000/'
});

export default api;
