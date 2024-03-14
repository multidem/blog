import express from 'express';
import { 
    getPost, 
    getAllPosts,
    deletePost,
    editPost,
    addPost, 
} from '../controllers/api-post-controller.js';

const apiRouter = express.Router();

// Просмотр записи по id
apiRouter.get('/api/post/:id', getPost);
// Все записи
apiRouter.get('/api/posts', getAllPosts);
// Удаление записи по id
apiRouter.delete('/api/post/:id', deletePost);
// Редактировать запись
apiRouter.put('/api/post/:id', editPost);
// Добавить запись
apiRouter.post('/api/post', addPost);

export { apiRouter };