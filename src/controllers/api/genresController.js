const {} = require("../../database/models");

module.exports = {
    list: (req, res) => {
        this.genres.findAll()
        .then(genres => {
            const RESPONDE = {
                meta: {
                    status: 200,
                    total: genres.lenght,
                    url: "/genres"
                },
                data: genres
            }
            res.json(RESPONSE);
        })
    },
    genres: (req, res) => {

    }, 
}