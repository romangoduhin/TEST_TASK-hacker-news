import axios from "axios";
import {showNotification} from "../helpers/showNotification";

const newsInstance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
});

const newsAPI = {
    getNewsIds: async () => {
        try {
            const response = await newsInstance.get(`newstories.json?print=pretty`)
            return response.data
        } catch (err) {
            showNotification('Getting News Error')
        }
    },
    getNewsById: async (id: number) => {
        try {
            const response = await newsInstance.get(`/item/${id}.json?print=pretty`)
            return response.data
        } catch (err) {
            showNotification('Getting News Error')
        }
    }
}


export default newsAPI;