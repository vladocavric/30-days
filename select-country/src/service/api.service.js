import axios from "axios"

class ApiService {
    static getCountries() {
        return new Promise((resolve, reject) => {
            axios.get('https://restcountries.com/v2/all')
            .then(response => {
                if (response.status === 200) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(e => {
                reject(e)
            })
        })
    }
}


export default ApiService;