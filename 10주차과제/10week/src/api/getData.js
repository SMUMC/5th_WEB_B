import axios from "axios";

export const getAllPosts = async ({ limit, skip }) => {
    try {
        const res = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`, {});
        return res.data.posts;
    } catch (error) {
        console.log(error);
        return null;
    }
}