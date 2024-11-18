const express = require("express")
const app =express()
const path = require('path')
const bodyParser  = require('body-parser')
const multer = require("multer")
const cors = require("cors")
const prisma = require("./db")

const storage = multer.memoryStorage()
const uploader = multer({storage})

app.use(cors({
  origin: "*"
}))

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/get", async(req,res) => {
  const created =  await prisma.user.findMany()
  return res.status(200).json(created)
})
app.post('/register',async(req,res)=>{
  try {
    console.log(req.body)
  const created =  await prisma.user.create({data: req.body})
  return res.status(200).json(created)
  } catch (error) {
    console.log(error)
  }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  });

app.listen(3000,() => console.log(`Server running on http://localhost:3000`))

