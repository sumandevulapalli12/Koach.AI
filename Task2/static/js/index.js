const sendReq = () => {
    //axios post
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const price = document.getElementById('price').value;
    console.log(title);
    axios.post('http://localhost:3000/book', {
        title: title,
        author: author,
        genre: genre,
        price: price
    })
        .then(res => {
            console.log(res);
        }
        )
}