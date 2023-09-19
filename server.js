require('dotenv').config()
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

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

app.get("/", (req, res) => {
  res.send("Hello!")
})

app.use(express.urlencoded({ extended: false }))

app.get('/logs/new', (req, res) => {
  res.render('New')
})

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})