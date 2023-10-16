const express = require('express');
const bodyParser = require('body-parser');
 

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
