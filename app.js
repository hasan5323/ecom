//express
const express = require('express');
const app = express();

// view engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(express.json())

//routes and controllers import
const errorController = require('./middlewares/errorHandler.js');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// routes
app.use('/admin', adminRoutes);
app.use('/shop',shopRoutes);
app.use(errorController.get404);

// listener
const port = 3000
app.listen(port,()=>{
    console.log(`server listening on localhost port ${port}`);
});
