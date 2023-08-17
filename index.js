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
// - le moteur de rendu EJS
app.set("view engine", "ejs");
// - dossier dans lequel trouver les vues
app.set("views", "views");
// -"static" pour les fichiers situés dans le dossier public
app.use(express.static("public"));
// On envoi dans l'objet locals, notre tableau de jeux,
// pour ne pas avoir à l'nvoyer dans locals depuis toutes nos routes
app.locals.games = games;

/*============================
* Définitions des routes
*==============================*/
app.get("/",(req, res) => {
    // rendre la bonne vue index.ejs
    res.render("index");
});


// app.get("/game/diceRoller", (req, res) => {
//     res.render("diceRoller", {css:true});
// });

// app.get("/game/fourchette", (req, res) => {
//     res.render("fourchette");
// });


app.get("/game/:nomDuJeu", (req, res) => {
    // Récupération du paramètre
    let gameUrl = req.params.nomDuJeu;
    //On veut récupérer le jeu depuis notre tableau games
    //Qui porte le meme nom que notre paramètre de route 
    let findGame = games.find((game) => game.name === gameUrl);

    // Cas dans lequel on ne trouve pas de bon jeu
    if(!findGame) {
        res.status(404).render("404");
    }

    // On fourni ici le bon jeu en data à notre fichier
    // revient a faire locals.game = findGame
    res.render("game", {game:findGame})

    // Autre méthode pour afficher directement la bonne page sans passer par une page game.ejs
    //res.render(findGame.name, {game: findGame})
})

/*============================
* Lancement du serveur
*==============================*/

app.listen(port, () => {
    console.log(`Votre serveur tourne sur le port ${port}`);
  }); 