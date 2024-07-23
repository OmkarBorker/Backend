const express = require('express');
const app = express();
const PORT = 3000;
const SignUpRouter = require('./routes/signUp');
const connectMongo = require('./controller/connection');
const SignInRouter = require('./routes/signIn');
const mongoSanitize = require('express-mongo-sanitize');
const ChatsRouter = require('./routes/chatsAPI');
const addPreferenceRouter = require('./routes/addPreference');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(mongoSanitize());

app.use('/signup', SignUpRouter);
app.use('/signin', SignInRouter);
app.use('/api', ChatsRouter);
app.use('/addPreference', addPreferenceRouter);

app.get('/', async (req, res) => {
    return res.send('Ok');
});

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`);
})