import express from 'express';
import { 
    getPost, 
    getAllPosts,
    deletePost,
    getEditPost,
    editPost,
    addPost, 
    getAddPost,   
} from '../controllers/post-controller.js';

const router = express.Router();

router.get('/all-posts/:id', getPost);

router.get('/all-posts', getAllPosts);

router.delete('/all-posts/:id', deletePost);

router.get('/edit/:id', getEditPost);

router.put('/edit/:id', editPost);

router.post('/add-post', addPost);

router.get('/add-post', getAddPost);

export { router };