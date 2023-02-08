const mongoose =require('mongoose')



const user = mongoose.model('user',{
    name: {
        type : string },
    lastnam:{
        type: string },
    age: { 
        type : number}
})



module.exports = user ; 