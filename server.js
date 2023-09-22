require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const Log = require('./models/logs')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.connection.once("open", () => {
  console.log("breached through their firewall, connected to the mongo server >:)")
})

const jsxViewEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.set("views", "./views")
app.engine("jsx", jsxViewEngine())


app.use(express.urlencoded({ extended: false }))

//Index
app.get('/logs', async (req, res) => {
  try {
    const foundLogs = await Log.find({})
    res.status(200).render('Index', {
      logs: foundLogs
    })
  } catch (err) {
    res.status(400).send(err)
  }
})

//New
app.get('/logs/new', (req, res) => {
  res.render('New')
})

//Create
app.post('/logs', async (req, res) => {
  try {

    if(req.body.shipIsBroken === 'on'){ //if checked, req.body.shipIsBroken is set to 'on'
      req.body.shipIsBroken = true; //do some data correction
    } else { //if not checked, req.body.shipIsBroken is undefined
      req.body.shipIsBroken = false; //do some data correction
    }
    console.log(req.body)
    const createdLog = await Log.create(req.body)
    
    res.status(201).redirect(`/logs/${req.params.id}`)
  } catch (err) {
    res.status(400).send(err)
  }
})

//Show
app.get('/logs/:id', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id)

    res.render('Show', {
      log: foundLog,
    });
  } catch (err) {
    res.status(400).send(err)
  }
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})