const model = require("../model/storiesModel")

module.exports.createNewstories = (req, res, next) => {
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

module.exports.readAllstories = (req, res, next) => {
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
        results.forEach(stories => {
            output.push({
                id: stories.user_id,
                name: stories.name,
                moment: stories.moment
            })
        });

        res.status(200).json(output);
    }

    model.selectAllChallenge(callback);
}