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
    }
  };
  
  //export du module controller
  module.exports = controller
  