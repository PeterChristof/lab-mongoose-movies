// ℹ️ Connects to the database
require("../db");

const Celebrity = require("../models/Celebrities.model");

const celebrities = [
    {
      name: "Bob Dylan",
      occupation: "Singer",
      catchPhrase: "Like a Rolling Stone"
    },
    {
        name: "Chet Faker",
        occupation: "Singer",
        catchPhrase: "No Diggity"
    },
    {
        name: "Denzel Washington",
        occupation: "Movie-Star",
        catchPhrase: "IDK"
    }
  ];

  Celebrity.insertMany(celebrities).then((celebritiesFromDB) => {
      console.log(`celebrities created - ${celebritiesFromDB.length}`);
  });