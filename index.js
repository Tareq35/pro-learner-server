const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const coursesCategory = require('./data/coursesCategory.json');
const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Courses API Running')
});

app.get('/courses-category', (req, res) => {
    res.send(coursesCategory)
});

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.listen(port, () => {
     console.log('Pro Learner server running on port', port);
    });