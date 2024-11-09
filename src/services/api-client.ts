import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fda088356bd94d8d900a98207d13b54d'
    }
})