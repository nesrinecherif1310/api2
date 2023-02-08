const express = require('express')
require('./config/connect')

const app =express()
app.use(express.json())

app.post('/add',(req ,res)=>{
    data =req.body;
    console.log('data')
})
app.get('/getall',()=>{
    console.log('get work ')

})
app.put('/update',()=>{
    console.log('update work ')
})


app.delete('/delete',()=>{
    console.log('delete work ')
})




app.listen( 3000 ,()=>{ console.log('server work')})