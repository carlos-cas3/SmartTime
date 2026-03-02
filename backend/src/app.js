const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const projectRoutes = require('./routes/project.routes');
const examRoutes = require('./routes/exam.routes');
const extraRoutes = require('./routes/extra.routes');
const eventRoutes = require('./routes/event.routes');
const notificationRoutes = require('./routes/notification.routes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/projects', projectRoutes);
app.use('/exams', examRoutes);
app.use('/extras', extraRoutes);
app.use('/events', eventRoutes);
app.use('/notifications', notificationRoutes);


app.get('/health', (req, res) => {
    res.json({ status: 'OK' , backend: 'running '})
});

module.exports = app;