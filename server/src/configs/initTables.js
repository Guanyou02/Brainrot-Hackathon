const pool = require("../services/db");

const SQLSTATEMENT = `
DROP TABLE IF EXISTS Moments;

CREATE TABLE Stories (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    name TEXT,
    moment TEXT
);

INSERT INTO Stories (user_id, name, moment) VALUES
(1, 'Tom', 'When she yells at you for forgetting what she told you earlier today, but you are just a chill guy enjoying your day');
`;

pool.query(SQLSTATEMENT, (error, results, fields) => {
    if (error) {
      console.error("Error creating tables:", error);
    } else {
      console.log("Tables created successfully");
    }
    process.exit();
  });