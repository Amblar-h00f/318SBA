//Imports
import express from 'express';
import dotenv from 'dotenv';


app.set('view engine', 'ejs');
app.use(express.static('public'));

//Setups
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use((req, res,) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

app.use(express.json());
app.use((req, res, next) => {
    req.timestamp = Date.now();
    next();
});

app.get('/veg-list', async (req, res) => {
    const vegetables = await getVegFromDB();
    res.render('veg-list', {vegetables});
});

//Routes

//Err Middlewares
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send('Server Error');
});

//Listener
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);

});