import express from 'express'
import annoncesRoute from './routes/annoncesRoute'
import usersRoute from './routes/usersRoute'
 


const app = express()
app.use(express.json())

app.use('/annonces' , annoncesRoute )
app.use('/users' , usersRoute )


app.listen(3000, ()=> {
    console.log('the server is ready')
})