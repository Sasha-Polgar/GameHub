// logique métier pour chaque route

// Import du games.json
const games = require("../games.json");

// Objet qui contient les différentes logiques pour chaque page

const controller = {
    homePage: (req, res) => {
      //rendre la bonne vue index.ejs
      res.render("index");
    },

    gamePage: (req, res) => {
        let gameUrl = req.params.nomDuJeu;
        let findGame = games.find((game) => game.name === gameUrl);
        if(!findGame) {
            res.status(404).render("404");
        }
        res.render("game", {game:findGame})
    },

    searchPage: (req, res) => {
        // On renvoie juste notre fichier search.ejs
        res.render("search")
    },

    resultsPage: (req, res) => {
        // Extraire et faire un console.log du paramètre qui est dans l'url
        // const gamesToFind = req.query.recherche
        // plus rapide avec la destructuration
        const {recherche} = req.query;

        // Recherche dans notre liste de jeux, un jeu
        // qui contient les termes de notre recherche

        const results = games.filter((game) => game.title.toLocaleLowerCase().includes(recherche.toLocaleLowerCase()))

        console.log(recherche, results);
        res.render("searchResults", {results});
    }
  };
  
  //export du module controller
  module.exports = controller
  