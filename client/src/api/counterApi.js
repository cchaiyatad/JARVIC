import axios from "axios";

const counterAPI = "http://localhost:8080/counter";

class CounterService {
    getCounters = async () => {
        try {
            const response = await axios.get(counterAPI, {});
            return response.data.data
        } catch (err) {
            throw err;
        }
    }

    postCounters = async () => {
        try {
            const response = await axios.post(counterAPI, {});
            return response.data.data
        } catch (err) {
            throw err;
        }
    }

    deleteCounters = async (id) => {
        try {
            const response = await axios.delete(counterAPI + "/" + id, {});
            return response.data.data
        } catch (err) {
            throw err;
        }
    }

    putCounters = async () => {

    }


}

export default new CounterService();