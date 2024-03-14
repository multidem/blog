import path from 'path';
const createPath = (page) => path.resolve('./', 'ejs-views', `${page}.ejs`);
export { createPath };