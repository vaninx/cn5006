express = require("express")
var app = express()
let Books = require('./BooksSchema')
let mongodbConnected = require('./MongoDBConnect')
const cors = require('cors');


var bodyparser =  require("body-parser")
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

app.use(cors());
console.log("BOOKS", Books)

app.get('/', function(req,res){

})

app.get('/allbooks',async(req,res)=>{
    const d = await Books.find();
    return res.json(d)
})

app.get('/getbooks/:id', async(req,res) =>{
    let id = req.params.id;
    Books.findById(id, function(err,book){
        res.json(book);
    });
});

app.post('/addbooks', function(req,res){
    console.log("Ref", req.body)
    let newBook = new Books(req.body);

    console.log("newbook -> ", newBook)
    newBook.save()
        .then(todo =>{
            res.status(200).json({'books':'book added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new book failed');
        });
})

app.post('/updatebook/:id', async(req,res) => {
    try{
        const id = req.params.id;
        const updatedata = req.body;

        const updatedbook = await Books.findByIdAndUpdate(id, updatedata, { new: true, runValidators: true});

        if(!updatedbook){
            return res.status(404).send('Book not found');
        }
        res.status(200).json({message:'Book updated successflly', book: updatedbook});
    } catch(err){
        console.error('Error updating book: ', err);
        res.status(500).send('An error has occured')
    }
});

app.post('/deletebook/:id', async(req,res) => {
    try{
        let id = req.params.id;
        console.log("deleting")

        const result = await Books.findByIdAndDelete(id)
        if(!result) {
            return res.status(404).send('Book not found');
        }

        res.status(200).send('Book Deleted');
    }
    catch(err) {
        console.error(err);
        res.status(500).send('An error has occured')
    }
    
});

app.listen(5000,function(){
    console.log("Server is running on the port 5000")
})