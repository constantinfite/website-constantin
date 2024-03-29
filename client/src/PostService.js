import axios from "axios";

const url = "api/posts/";

class PostService {
  //Get Posts
  static async getPosts() {
    try {
      const res = await axios.get(url);
      const data = res.data;
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      
      return data.map(post => ({
        ...post,
        prenom: post.Prénom,
        texte: post.Texte,
        createdAt: new Date(post.createdAt)
      }));
    } catch (err) {
      console.log(err);
    }
  }
  //Create Posts

  static insertPost(info) {
    return axios.post(url, {
      info
    });
  }

  //Delete Post

  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
