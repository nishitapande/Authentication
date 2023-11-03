const mongoose = require('mongoose');
module.exports =  () => {
    const connnctionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        mongoose.connect(process.env.DB, connnctionParams);
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
        console.log('Could not connect to database');
    }
}
