import axios from 'axios';
class ApiService {
	static async getCats() {
		try {
			const url = 'https://api.thecatapi.com/v1/breeds';
			const response = await axios.get(url);
			return response.data;
		} catch (err) {
			console.log(err);
			return err;
		}
	}

	static async getCountries() {
		try {
			const url = 'https://restcountries.com/v2/all';
			const response = await axios.get(url);
			return response.data;
		} catch (err) {
			console.log(err);
			return err;
		}
	}
}

export default ApiService;
