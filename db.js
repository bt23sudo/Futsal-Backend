const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://basimrizwan4:NppEV9hwEIVjCMdI@cluster0.5cips.mongodb.net/futsal-vista').then(()=>{
    console.log('connected')
})