import axios from "axios"

const counterAPI = "http://localhost:8080/counter"

class CounterService {
    getCounters = async () => {
        try {
            const response = await axios.get(counterAPI, {})
            return response.data.data
        } catch (err) {
            throw err;
        }
    }

    postCounter = async () => {
        try {
            const response = await axios.post(counterAPI, {})
            return response.data.data
        } catch (err) {
            throw err
        }
    }

    deleteCounter = async (id) => {
        try {
            const response = await axios.delete(counterAPI + "/" + id, {})
            return response.data.data
        } catch (err) {
            throw err
        }
    }

    putCounters = async (counters) => {
        const requests = counters.map((counter) => {
            return axios.put(counterAPI + "/" + counter.id, { "value": counter.value })
        })
        try {
            axios.all(requests)
        } catch (err) {
            throw err
        }
    }

}

export default new CounterService();