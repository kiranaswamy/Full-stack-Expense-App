const express = require('express');
const db = require('./utils/db-connection');
const expenceRoutes = require('./router/expenseRoutes')
const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Server is created')
})

app.use('/api',expenceRoutes)

db.sync()
.then(()=>{
    app.listen(3000,()=>{
    console.log('Server is running')
})
}).catch((err)=>{
    console.log(err)
})