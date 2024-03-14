import { createPath } from '../misc/create-path.js';
import { Post } from '../models/post.js';

const getPost = (req, res) => {
    const title = "Запись";
    Post
    .findById(req.params.id)
    .then((post) => res.render(createPath('post'), { post, title }))
    .catch((error) => handleError(res, error));
}

const getAllPosts = (req, res) => {
    const title = "Все записи";
    Post
    .find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).render(createPath('all-posts'), { posts, title }))
    .catch((error) => handleError(res, error));
}

const deletePost = (req, res) => {
    Post
    .findByIdAndDelete(req.params.id)
    .then((result) => res.redirect('/all-posts'))
    .catch((error) => handleError(res, error));
}

const getEditPost = (req, res) => {
    const title = 'Редактировать запись';
    Post
      .findById(req.params.id)
      .then(post => res.render(createPath('edit-post'), { post, title }))
      .catch((error) => handleError(res, error));
}

const editPost = (req, res) => {
    const { title, author, text } = req.body;
    const { id } = req.params;
    Post
      .findByIdAndUpdate(id, { title, author, text })
      .then((result) => res.redirect(`/all-posts/${id}`))
      .catch((error) => handleError(res, error));
}

const addPost = (req, res) => {
    const { title, author, text } = req.body;
    const post = new Post({ title, author, text });
    post
      .save()
      .then((result) => res.redirect('/all-posts'))
      .catch((error) => handleError(res, error))
}

const getAddPost = (req, res) => {
    const title = "Добавить запись";
    res.status(200).render(createPath('add-post'), { title });
}

const handleError = (res, error) => {
    console.log(error);
    res.render(createPath('error'), { title: 'Страница ошибки' });
  };

export { 
    getPost,
    getAllPosts,
    deletePost,
    getEditPost,
    editPost,
    addPost, 
    getAddPost,  
};