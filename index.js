/*============================
* Import des modules
*==============================*/
const express = require("express");
const games = require("./games.json");
const router = require("./src/routeur")

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
* Middleware pour traduire le body de la requête avec la méthode POST
*==============================*/
app.use(express.urlencoded({extended:true}))

/*============================
* Middleware de journalisation
*==============================*/
//Logger certaines infos comme la date, l'ip du client et l'url demandée
//A chaque requête envoyée
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}  ${req.ip}] ${req.path}`);
    next();
})



/*============================
* Définitions des routes
*==============================*/

// On va indiquer à notre serveur, un routeur à utiliser
app.use(router)

// app.get("/",(req, res) => {                 // Ce que l'on aurait fait si on n'utilisait pas de routeur
//     res.render("index");
// });


// app.get("/game/diceRoller", (req, res) => {      // route paramétrées en dur
//     res.render("diceRoller", {css:true});
// });

// app.get("/game/fourchette", (req, res) => {
//     res.render("fourchette");
// });


// app.get("/game/:nomDuJeu", (req, res) => {                         // Ce que l'on aurait fait si on n'utilisait pas de routeur
//     // Récupération du paramètre
//     let gameUrl = req.params.nomDuJeu;
//     //On veut récupérer le jeu depuis notre tableau games
//     //Qui porte le meme nom que notre paramètre de route 
//     let findGame = games.find((game) => game.name === gameUrl);

//     // Cas dans lequel on ne trouve pas de bon jeu (ici comentté car middleware plus bas)
//     // if(!findGame) {
//     //     res.status(404).render("404");
//     // }

//     // On fourni ici le bon jeu en data à notre fichier
//     // revient a faire locals.game = findGame
//     res.render("game", {game:findGame})

//     // Autre méthode pour afficher directement la bonne page sans passer par une page game.ejs
//     //res.render(findGame.name, {game: findGame})
// })

/*==================================
* Middleware pour la gestion des 404
*=====================================*/
app.use((req, res, next) => {
    res.status(404).render("404");
})



/*============================
* Lancement du serveur
*==============================*/

app.listen(port, () => {
    console.log(`Votre serveur tourne sur le port ${port}`);
  }); 