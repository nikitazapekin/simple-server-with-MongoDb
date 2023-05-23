/*import express from 'express'

const PORT =5000;
const app=express()
//app.get('/', (req, res)=> {
  //  console.log(req.query) //http://localhost:5000/?test=123&query=afsasf&third=affsa { test: '123', query: 'afsasf', third: 'affsa' }
   // { test: '123', query: 'afsasf', third: 'affsa' }
//res.status(200).json("Server is working123")
//}) 
app.use(express.json())
app.post('/', (req, res)=> {
    console.log(req.query) //http://localhost:5000/?test=123&query=afsasf&third=affsa { test: '123', query: 'afsasf', third: 'affsa' }
   // { test: '123', query: 'afsasf', third: 'affsa' }
res.status(200).json("Server is working12e3")
}) 
app.listen(PORT, ()=> {
    console.log("SERVER STARTED  ON PORT"+PORT)
}) */

import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js';


const PORT = 5000;
const app = express();
const DB_url="mongodb+srv://nikita:Mikrosoft2010@cluster0.5fspc38.mongodb.net/?retryWrites=true&w=majority"


app.use(express.json());

// Middleware для обработки CORSв
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Можно указать конкретный источник, вместо '*'
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/', async (req, res) => {
  const {author, title, content, picture}=req.body
  const post = await Post.create({author, title, content, picture})
  console.log(req.body); // { gello: 'gello' }
 // res.status(200).json('Server is working12e3');
 res.json(post)
});
async function startApp() {
    try{
       await mongoose.connect(DB_url, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => {
            console.log('SERVER STARTED ON PORT' + PORT);
          });
    } catch(e) {
console.log(e)
    }
}
startApp()
/*npm init -y
npm i express 
добавили в пэкадж джсон   "start": "node index.js", для запуска  и "type": "module",  "dev": "nodemon index.js"
npm start
npm i -D  nodemon
npm run dev - запускаем сервер через nodemon теперь мы можем автоматически видеть обновления сервера просто обновив страницу
npm install mongodb
npm i mongoose
*/