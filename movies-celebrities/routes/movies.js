const router = require("express").Router();
const Celebrity = require("../models/Celebrities.model")
const Movie = require("../models/Movie.model");


router.get("/movies/new", async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render("movies/new", { celebrities });
});

router.post("/movies/new", async (req, res) => {
const { title, genre, plot, cast } = req.body;
await Movie.create ({ title, genre, plot, cast });
res.redirect("/movies");
});

router.get("/movies", async (req, res) => {
    const movies = await Movie.find();
    res.render("movies/index", {movies})
});

module.exports = router;