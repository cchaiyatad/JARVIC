import axios from "axios";

const counterAPI = "http://localhost:8080/counter";

class CounterService {

    getCounters = async () => {
        try {
            const response = await axios.get(counterAPI, {});
            console.log(response.data)
        } catch (err) {
            throw err;
        }
    }


}

export default new CounterService();