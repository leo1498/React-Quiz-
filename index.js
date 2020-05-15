// RED SATIETY QUIZ 

const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const path = require('path');

const app = express();

const SELECT_ALL_COMPANY_QUERY = 'SELECT * FROM red_satiety_quiz_company';

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'quiz-royal'
});

connection.connect(err => {
    if(err) {
        return err;
    }
});

app.use(cors())

app.get('/', (req, res) => {
    res.send('go to api results');
});

app.get('/results/add', (req, res) => {
    const { name } = req.query;
    const INSERT_COMPANY_QUERY = `INSERT INTO red_satiety_quiz_company (name) VALUES('${name}')`;
    connection.query(INSERT_COMPANY_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        } else{
            return res.json('succsess adding');
        }
    });
});

app.get('/answer/add', (req, res) => {
    const { answer1, answer2  } = req.query;
    const INSERT_COMPANY_QUERY2 = `INSERT INTO red_satiety_quiz_reviews (answer1, answer2) VALUES('${answer1}', '${answer2}')`;
    connection.query(INSERT_COMPANY_QUERY2, (err, results) => {
        if(err) {
            return res.send(err);
        } else{
            return res.json('succsess adding');
        }
    });
});

app.get('/results', (req, res) => {
    connection.query(SELECT_ALL_COMPANY_QUERY, (err, results) => {
        if(err) {
            return res.send(err);
        } else{
            return res.json({
                data: results
            });
        }
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Go to http://localhost:3000/users so you can see the data.');
   });