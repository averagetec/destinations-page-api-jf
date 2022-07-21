const express = require('express')
const server = express()

server.listen(3000);

const destinations = {
    189723: {
        destination: "Eiffel Tower",
        location: "Paris",
    },

    987654: {
        destination: "Big Ben",
        location:"London",
    },
};

server.get('/destinations',  (req, res) =>{
    res.send(destinations)
})
