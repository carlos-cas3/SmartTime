const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/users', userRoutes);


app.get('/health', (req, res) => {
    res.json({ status: 'OK' , backend: 'running '})
});

module.exports = app;