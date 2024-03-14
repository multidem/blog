import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import methodOverride from 'method-override';
import chalk from 'chalk';
import { router } from './routes/post-routes.js';
import { apiRouter } from './routes/api-post-routes.js';
import { createPath } from './misc/create-path.js';
import dotenv from 'dotenv';

const errorMsg = chalk.bgRed;
const successMsg = chalk.blue;

const app = express();
const result = dotenv.config();
const PORT = 3000;
// const db = '';

mongoose
  .connect(result.parsed.MONGO_URL)
  .then((res) => console.log(successMsg('Соединение с БД успешно установлено')))
  .catch((error) => console.log(errorMsg(error)));

app.set('view engine', 'ejs');

app.listen(PORT, (error) => {
    error ? console.log(errorMsg(error)) : console.log(successMsg(`Прослушивание порта ${PORT}`));
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('css'));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    const title = "Главная страница";
    res.status(200).render(createPath('index'), { title });
});

app.get('/contacts', (req, res) => {
    const title = "Контакты";
    const ourContacts = [
        { name: 'YouTube', link: 'https://youtube.com' },
        { name: 'GitHub', link: 'https://github.com' },
        { name: 'Node.js', link: 'https://nodejs.org' },
    ];
    res.status(200).render(createPath('contacts'), { ourContacts, title });
});

app.get('/about', (req, res) => {
    res.redirect('/contacts');
});

app.use(router);
app.use(apiRouter);

app.use((req, res) => {
    const title = "Страница ошибки";
    res
        .status(404)
        .render(createPath('error'), { title });
});

