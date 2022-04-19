// DEPENDENCIES
const path = require('path');
const express = require('express');
const session = require('express-session') // manages the login sessions
const exphbs = require('express-handlebars') // the handlebars with express packacge (allows us to use the res.render method)
const helpers = require('./utils/helpers');

const routes = require('./routes')

// create an instance of our epxress app
const app = express();
const PORT = process.env.PORT || 3001; // dynamic port if we are on heroku, or 3001 if local


//DATABASE STUFF
// Import the connection object
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store); // that express session thing needs this to work

const sess = {
  secret: 'this can be anything but its a secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize // this object now knows to use OUR sequelize db
  })
}

app.use(session(sess)); // we explicitly tell express to use the session functionality that we just described above (session manages login/logout experience)


//TELL EXPRESS ABOUT OUR RENDERER (handlebars)
const hbs = exphbs.create({
  helpers: helpers
}) // we let handlebars konw of all our helpers that we imported above--in this case we have the format_date functionality

app.engine('handlebars', hbs.engine) // set the express engine to use the handlebars engine
app.set('view engine', 'handlebars') // mounted servers inherit settings


// basic express needs --we want to be able to send and recieve JSON
app.use(express.json());
//we need express to understand url encoding %20 = ' '
app.use(express.urlencoded({ extended: true }));
// set up access to our static files -- any .js or .css or images the front end will request
app.use(express.static(path.join(__dirname, 'public'))) // looks at the public folder as avaiable to any request


// we need to open access ot the routes
app.use(routes)

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
