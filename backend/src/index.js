const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    // mongo connection is succedded
    // listen for requests
    app.listen(config.port, () => {
        console.log(`server started at port ${config.port}`);
    });
});