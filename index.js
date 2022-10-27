const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


const coursesCategory = require('./data/coursesCategory.json');

app.get('/', (req, res) => {
    res.send('Courses API Running')
});

app.get('/courses-category', (req, res) => {
    res.send(coursesCategory)
})

app.listen(port, () => {
     console.log('Pro Learner server running on port', port);
    })