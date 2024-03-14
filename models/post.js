import mongoose from 'mongoose';

// Создаем конструктор Schema 
const Schema = mongoose.Schema;

// Создаем объект схемы из конструктора Schema
const postSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Применяем созданную схему к модели
const Post = mongoose.model('Post', postSchema);

// Экспортируем модель
export { Post };