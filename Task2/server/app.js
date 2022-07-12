const express = require('express');
const app = express();
const port = 3000;
const uuid = require('uuid');
const fs = require('fs');

app.post('/book', (req, res) => {

    const { title, author, genre, price } = req.query;

    //couldnt add unique ID here.

    appendData({
        title,
        author,
        genre,
        price
    }
    );
});

//append data to json file
const appendData = (data) => {
    fs.appendFile('books.json', JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

app.listen(port, () => console.log(`listening on port ${port}!`));