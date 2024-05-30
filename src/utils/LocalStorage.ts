import { IPost } from "../interfaces/models"

const POSTS = "POSTS"

export class LocalStorage {

    static setPosts(data: Array<IPost>) {
        localStorage.setItem(POSTS, JSON.stringify(data))
    }

    static getPosts() {
        const getPosts: Array<IPost> = JSON.parse(localStorage.getItem(POSTS)!);
        return getPosts;
        // const p = JSON.parse(h);
    }


    static removePost() {
        // localStorage.removeItem(POSTS)
    }

}