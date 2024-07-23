const express = require('express');
const app = express();
const PORT = 3000;
const SignUpRouter = require('./routes/signUp');
const connectMongo = require('./controller/connection');
const SignInRouter = require('./routes/signIn');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/signup', SignUpRouter);
app.use('/signin', SignInRouter);

app.get('/', async (req, res) => {
    return res.send('Ok');
});

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
})