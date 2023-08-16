/*============================
* Import des modules
*==============================*/
const express = require("express");
const games = require("./games.json");

/*============================
* Configuration d'express
*==============================*/
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static("public"));
app.locals.games = games;

/*============================
* Définitions des routes
*==============================*/
app.get("/",(req, res) => {
    res.render("index")
})

app.get("/game/fourchette", (req, res) => {
    res.render("fourchette")
})

app.get("/game/diceRoller", (req, res) => {
    res.render("diceRoller", {css:true})
});

// app.get("/game/:nomDuJeu", (req, res) => {
//     let gameUrl = req.params.nomDuJeu;
//     let findGame = games.find((game) => game.name === nomDuJeu);
//     if(!findGame) {
//         res.status(404);
//     }
//     res.render({game:findGame})
// })

/*============================
* Lancement du serveur
*==============================*/

app.listen(port, () => {
    console.log(`Votre serveur tourne sur le port ${port}`);
  }); 