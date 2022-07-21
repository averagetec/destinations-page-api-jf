const express = require('express')
const server = express()
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});

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
