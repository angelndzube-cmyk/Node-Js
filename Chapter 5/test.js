const mongoose = require('mongoose')
const BlogPost = require('./models/BlogPost')

mongoose.connect('mongodb://127.0.0.1/my_database');

async function doTest() {
    // CREATE - page 55
    const blogpost = await BlogPost.create({
        title: 'The Mythbuster Guide to Saving Money on Energy Bills',
        body: 'If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills.'
    });
    console.log(blogpost);

    mongoose.connection.close();
}

doTest();