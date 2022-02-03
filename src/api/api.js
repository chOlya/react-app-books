import axios from "axios"

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
})

const apiKey = process.env.REACT_APP_API_KEY;

export const bookAPI = {
    searchBook(searchString, orderBy, category) {
        if (category != ' ') {
            return instance.get(`?maxResults=30&orderBy=${orderBy}&q=${(searchString) + '+subject:' + (category) + '&' + (apiKey)}`)
        } else {
            return instance.get(`?maxResults=30&orderBy=${orderBy}&q=${(searchString) + '&' + (apiKey)}`)
        }
    },

    showBookCard(userId) {
        return instance.get('/' + userId + '?' + `${apiKey}`)
    },

    loadMoreButton(booksCount, searchString) {
        return instance.get(`?maxResults=30&startIndex=${booksCount}&q=${(searchString)}`)
    }
}