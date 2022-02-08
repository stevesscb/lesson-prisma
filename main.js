// Libraries used to create the server
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import expressLayouts from 'express-ejs-layouts'
import compileSass from 'express-compile-sass'
import moment from 'moment'

const app = express() // The instance that "host" our server
const port = process.env.PORT || 3000 // The port number our server runs on

// Allow views to have access to moment library
app.locals.moment = moment

// Setting the folder for our views and setting ejs as our views engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Allows us to use a layout.ejs file as our layout
app.use(expressLayouts)

// Allows us to use scss
app.use(compileSass({
  root: `${process.cwd()}/public`,
  sourceMap: true,
  sourceComments: true,
  watchFiles: true,
  logToConsole: true
}))

// Defining public folder for browser to access files
app.use(express.static('public'))

// Prints out request information
app.use(morgan('tiny'))

// Defining the routes for our server
app.use('/', (await import('./src/routes.js')).default)

// Starts the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`App listening at http://localhost:${port}`)
})
