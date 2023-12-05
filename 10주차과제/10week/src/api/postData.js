import axios from "axios";

export const addNewPost = async (content, userId) => {
    try {
        const res = await axios.post(`https://dummyjson.com/posts/add`, {
            title: content,
            userId: userId,
        });
        // console.log(res);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}