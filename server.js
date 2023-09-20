const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// mongoose.connection.once("open", () => {
//   console.log("breached through their firewall, connected to the mongo server >:)")
// })

const jsxViewEngine = require("jsx-view-engine")
app.set("view engine", "jsx")
app.set("views", "./views")
app.engine("jsx", jsxViewEngine())


app.use(express.urlencoded({ extended: false }))

//Index
app.get('/logs', async (req, res) => {
  res.send('received')
})

//New
app.get('/logs/new', (req, res) => {
  res.render('New')
})

//Create
app.post('/logs', async (req, res) => {
  if(req.body.shipIsBroken === 'on'){ //if checked, req.body.shipIsBroken is set to 'on'
    req.body.shipIsBroken = true; //do some data correction
  } else { //if not checked, req.body.shipIsBroken is undefined
    req.body.shipIsBroken = false; //do some data correction
  }
  
  res.send(req.body)
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})