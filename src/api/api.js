import axios from "axios"

const instance = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/volumes",
})

export const bookAPI = {
    searchBook(searchString, orderBy, category) {
        if (category != '') {
            return instance.get(`?maxResults=30&orderBy=${orderBy}&q=${(searchString) + '+subject:' + (category)}`)
        } else {
            return instance.get(`?maxResults=30&orderBy=${orderBy}&q=${(searchString)}`)
        }
    },

    showBookCard(userId) {
        return instance.get('/' + userId)
    },

    loadMoreButton(booksCount, searchString) {
        return instance.get(`?maxResults=30&startIndex=${booksCount}&q=${(searchString)}`)
    }
}