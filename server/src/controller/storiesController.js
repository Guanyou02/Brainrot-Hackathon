const model = require("../model/storiesModel")

module.exports = (req, res, next) => {
    const data = {
        name: req.body.name,
        moment: req.body.moment
    }

    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error :", error);
            res.status(500).json(error);
        }

        res.status(201).json({
            name: data.name,
            moment: data.moment
        });
    }

    model.insertStories(data, callback);
}

module.exports = (req, res, next) => {
    const callback = (error, results, fields) => {
        if (error) {
            console.error("Error selectAllChallenge:", error);
            res.status(500).json(error);
        }

        if (results.length == 0) {
            res.status(403).json({
                message: "No results found"
            })
        }

        let output = []
        results.forEach(moment => {
            output.push({
                name: results.name,
                moment: results.momenet
            })
        });
    }

    model.selectAllChallenge(callback);
}