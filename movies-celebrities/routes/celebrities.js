const router = require("express").Router();
const Celebrity = require("../models/Celebrities.model");

router.get("/celebrities/new", async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render("celebrities/new", { celebrities })
});

router.post("/celebrities/new", async (req, res) => {
    const { name, occupation, catchPhrase } = req.body;
    await Celebrity.create({ name, occupation, catchPhrase });
    res.redirect("/celebrities");
})

router.get("/celebrities", async (req, res) => {
    const celebrities = await Celebrity.find();
    console.log(celebrities);

    res.render("celebrities/index", {celebrities})
});

router.get("/celebrities/:celebritiesId", async (req, res) => { //..shows that its a parameter from the url
    const celebrity = await Celebrity.findById(req.params.celebritiesId)
    res.render("celebrities/show", celebrity);
    });

    router.get("/celebrities/:celebritiesId/edit", async (req, res) => {
        const celebrity = await Celebrity.findById(req.params.celebritiesId);
        res.render("celebrities/edit", celebrity);
        });
        
        router.post("/celebrities/:celebritiesId/edit", async (req, res) => {
            const {name, occupation, catchPhrase} = req.body;
        await Celebrity.findByIdAndUpdate(req.params.celebritiesId, {
        name,
        occupation,
        catchPhrase,
        });
        res.redirect(`/celebrities/${req.params.celebritiesId}`);
        });

    router.post("/celebrities/:celebritiesId/delete", async (req, res) => {
        await Celebrity.findByIdAndRemove(req.params.celebritiesId);
        res.redirect("/celebrities");
    });

module.exports = router;