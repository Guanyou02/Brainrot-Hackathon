const pool = require('../services/db');

module.exports.insertStories = (data, callback) => {
    const SQLSTATEMENT = `
        INSERT INTO Stories (name, moment)
        VALUES (?, ?);
        `;
    const VALUES = [data.name, data.stories];

    pool.query(SQLSTATEMENT, VALUES, callback)
}

module.exports.selectAllChallenge = (callback) => {
    const SQLSTATEMENT = `
        SELECT * FROM Stories;
        `;

    pool.query(SQLSTATEMENT, callback);
}