import axios from "axios";

const newsInstance = axios.create({
    baseURL: 'https://hacker-news.firebaseio.com/v0/',
});

const newsAPI = {
    getNewsIds: async () => {
        try {
            const response = await newsInstance.get(`newstories.json?print=pretty`)
            return response.data
        } catch (err) {
            console.log(err);
        }
    },
    getNewsById : async (id: number) => {
        try {
            const response = await newsInstance.get(`/item/${id}.json?print=pretty`)
            return response.data
        } catch (err) {
            console.log(err);
        }
    }
}

export default newsAPI;