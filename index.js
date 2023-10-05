const express = require('express')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const dataSource = require('./connect').dataSource

const postRoute = require('./routes/post.route')
const categoryRoute = require('./routes/category.route')

app.use('/api/posts', postRoute)
app.use('/api/categories', categoryRoute)

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}\n http://localhost:${PORT}`)
})