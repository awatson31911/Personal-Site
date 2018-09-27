const express = require('express');
const app = express(); // Creates an instance of express application
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000

/* ------------------------------ Middleware ------------------------------------------- */

/* --------------- Logging ------------------- */
app.use(morgan('dev')); 

/* --------------- Parsing ------------------- */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* --------------- Routing ------------------- */
app.use('/api', require('./routes'));

/* ------------------------------ Default index.html ------------------------------------------- */
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/views/index.html'));
});

/* ------------------------------ Error Handling ------------------------------------------- */
app.use(function(err, req ,res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
})

/* ------------------------------ ~ Start Server ~ ------------------------------------------- */
app.listen(port, function() {
  console.log("Knock, Knock");
  setTimeout(function() {
    console.log("Who's there?")
  });
  setTimeout(function() {
    console.log("...We're listening.....")
  });
})