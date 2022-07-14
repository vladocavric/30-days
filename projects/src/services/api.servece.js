import { useReducer } from 'react';
import axios from 'axios';
import catsReducer from '../store/reducers/cats';

class ApiService {
	static async getCats() {
        const [cats, catDispatch] = useReducer(catsReducer, [])
        try {
            const url = 'https://api.thecatapi.com/v1/breeds';
            const response = await axios.get(url);
            return response.data;
        } catch (err) {
            return err
        }
	}
}

export default ApiService