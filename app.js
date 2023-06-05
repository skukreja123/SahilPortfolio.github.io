let express = require('express');
var mongoose = require('mongoose');
let app = express();
let path = require('path');

mongoose.connect('mongodb://127.0.0.1:27017/Contact',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

let port = 1000;

const contactschema = new mongoose.Schema({
    name: String,
    number: String,
    email: String,
    subject: String,
    address: String
});

const Contact = mongoose.model('Contact', contactschema);

app.use(express.static(path.join(__dirname, 'views')));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views', 'proto.html'));
});


app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(() => {
        res.status(200).send("This itme save  in dat base")
    }).catch(() => {
        res.status(400).send("Item was not saved")
    });

    // res.status(200).render('contact.pug', params);
});


app.listen(port, () => {
    console.log(`Successfully excuted ${port}`);
})

