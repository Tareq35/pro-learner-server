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

app.get('/courses-category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses)
    }
    else {
        const category_courses = courses.filter(c => c.categoryId === id);
        res.send(category_courses);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses)
});

app.listen(port, () => {
    console.log('Pro Learner server running on port', port);
});