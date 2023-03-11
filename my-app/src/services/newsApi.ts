import axios from "axios";
import {notifications} from "@mantine/notifications";

const newsInstance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
});

const newsAPI = {
    getNewsIds: async () => {
        try {
            const response = await newsInstance.get(`newstories.json?print=pretty`)
            return response.data
        } catch (err) {
            notifications.show({
                title: 'Getting News Error',
                message: ''
            })
        }
    },
    getNewsById: async (id: number) => {
        try {
            const response = await newsInstance.get(`/item/${id}.json?print=pretty`)
            return response.data
        } catch (err) {
            notifications.show({
                title: 'Getting News Error',
                message: ''
            })
        }
    }
}


export default newsAPI;