import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../../../API/Api";
import { ApiStatus, IPost, IPostState } from "../../../interfaces/models";
import { LocalStorage } from "../../../utils/LocalStorage";
import { ToastMessage } from "../../../utils/ToastMessage";


const initialState: IPostState = {
    posts: [],
    postsStatus: ApiStatus.ideal,
    createPostFormStatus: ApiStatus.ideal,
    deletePostStatus: ApiStatus.ideal
}

export const getPostsAction = createAsyncThunk("post/getPostAction", async () => {
    const { res, err } = await API.getPosts();
    if (err) {
        ToastMessage.notifyError("Server Error");
    }
    const myPosts: Array<IPost> = res.slice(0, 4);
    if (LocalStorage.getPosts() === null) {
        LocalStorage.setPosts(myPosts)
    }
})

export const createPostAction = createAsyncThunk("post/createPostAction", async (data: IPost) => {
    const getOlderPosts = LocalStorage.getPosts();
    getOlderPosts.push(data)
    LocalStorage.setPosts(getOlderPosts)
})

export const deletePostAction = createAsyncThunk("post/deletePostAction", async (id: number) => {
    return id;
})


const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        resetCreateListStatus: (state) => {
            state.createPostFormStatus = ApiStatus.ideal
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPostsAction.pending, (state) => {
            state.postsStatus = ApiStatus.loading
        });
        builder.addCase(getPostsAction.fulfilled, (state, action) => {
            state.postsStatus = ApiStatus.ideal;
            state.posts = LocalStorage.getPosts()
        });
        builder.addCase(getPostsAction.rejected, (state) => {
            state.postsStatus = ApiStatus.error
        });
        builder.addCase(createPostAction.pending, (state) => {
            state.createPostFormStatus = ApiStatus.loading
        });
        builder.addCase(createPostAction.fulfilled, (state) => {
            state.createPostFormStatus = ApiStatus.success;
        });
        builder.addCase(createPostAction.rejected, (state) => {
            state.createPostFormStatus = ApiStatus.error
        });
        builder.addCase(deletePostAction.fulfilled, (state, action) => {
            const newPosts = state.posts.filter((item) => item.id !== action.payload);
            LocalStorage.setPosts(newPosts)
            state.posts = newPosts
            state.deletePostStatus = ApiStatus.success
        });
    }
})

export default postSlice.reducer
export const { resetCreateListStatus } = postSlice.actions 