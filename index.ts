import express from 'express'  //importing express
const app = express();      //making instance of app using express
const port = process.env.PORT || 3000;  //inilizing port number

//making api end point
app.get("/", (req, res) => {
  res.send('Congratualtion your first Nodejs project working with typescript')
})

//listening our app
app.listen(port, () => {
  console.log(`App listen on PORT:${port}`)
})