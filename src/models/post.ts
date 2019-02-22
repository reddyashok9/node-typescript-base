import mongoose from "mongoose";

export type PostModel = mongoose.Document & {
    postTitle: string,
    postDesc: string
};

const postSchema = new mongoose.Schema({
    postTitle: String,
    postDesc: String

}, { timestamps: true });

// export const Post: PostType = mongoose.model<PostType>('User', postSchema);
const Post = mongoose.model("Post", postSchema);
export default Post;