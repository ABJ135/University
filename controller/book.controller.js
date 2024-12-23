const Book = require('../models/book.models')

const postBook = async(req,res)=>{
const data = req.body
const object = await Book.create(data)
res.json({"mesage":"Object created succcessfully",object})
}

const getBook = async (req,res)=>{
    const object  = await Book.find({})
    res.json(object)
}

const search = async (req,res)=>{
    const author = req.query.author
    const object = await Book.findOne({author:author})
    res.json(object)
}

const getById = async (req,res)=>{
    const id = req.params.id
    const object = await Book.findById(id)
    res.json(object)
}

const deletee = async (req,res)=>{
    const id = req.params.id
    const object = await Book.deleteOne({id})
}

const parameter1 = async (req,res)=>{
    try {
        const year = parseInt(req.query.year);
    
        if (!year) {
          return res.status(400).json({ error: "Please provide a valid 'year' query parameter" });
        }
    
        const books = await Book.find({ year: { $gt: year } });
    
        res.json(books); 
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while retrieving books' });
      }
}

module.exports = {
    postBook,
    getBook,
    getById,
    search,
    parameter1
}